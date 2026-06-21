/**
 * Processes osm_kengeri.json → data/floodData.js AND docs/floodData.js
 * Full Kengeri road network with high density.
 * Status: 10% red, 20% yellow, 70% green (seeded, consistent on reload)
 */
const fs   = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'osm_kengeri.json'), 'utf8'));

// 1. Node coordinate lookup
const osmNodes = {};
raw.elements.filter(e => e.type === 'node').forEach(n => {
  osmNodes[n.id] = { lat: n.lat, lng: n.lon };
});

// 2. All highway ways (named or unnamed — we want density)
const ways = raw.elements.filter(e =>
  e.type === 'way' &&
  e.nodes?.length >= 2 &&
  e.tags?.highway
);
console.log('Total ways:', ways.length);

// 3. Find intersection nodes (shared by ≥2 ways) + endpoints
const nodeWayCount = {};
ways.forEach(way => {
  way.nodes.forEach(nid => { nodeWayCount[nid] = (nodeWayCount[nid] || 0) + 1; });
});
ways.forEach(way => {
  const f = way.nodes[0], l = way.nodes[way.nodes.length - 1];
  nodeWayCount[f] = (nodeWayCount[f] || 0) + 1;
  nodeWayCount[l] = (nodeWayCount[l] || 0) + 1;
});
const intersectionIds = new Set(
  Object.entries(nodeWayCount).filter(([, c]) => c >= 2).map(([id]) => parseInt(id))
);
console.log('Intersections:', intersectionIds.size);

// 4. Haversine distance
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dL = (lat2 - lat1) * Math.PI / 180;
  const dG = (lng2 - lng1) * Math.PI / 180;
  const a  = Math.sin(dL/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dG/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// 5. Split each way into segments between intersections
const segments = [];
ways.forEach(way => {
  const name    = way.tags.name || way.tags.highway;
  const highway = way.tags.highway;
  const seq     = way.nodes;
  let segStart  = 0;

  for (let i = 1; i < seq.length; i++) {
    const isLast = i === seq.length - 1;
    const isInt  = intersectionIds.has(seq[i]);
    if (isInt || isLast) {
      const fromId = seq[segStart], toId = seq[i];
      if (fromId === toId) { segStart = i; continue; }

      const coords = [];
      let dist = 0;
      for (let j = segStart; j <= i; j++) {
        const n = osmNodes[seq[j]];
        if (!n) continue;
        coords.push([n.lat, n.lng]);
        if (j > segStart) {
          const p = osmNodes[seq[j-1]];
          if (p) dist += haversineKm(p.lat, p.lng, n.lat, n.lng);
        }
      }
      if (coords.length >= 2) {
        segments.push({ fromOsmId: fromId, toOsmId: toId, name, highway, coords, distance: Math.round(dist * 100) / 100 });
      }
      segStart = i;
    }
  }
});
console.log('Segments:', segments.length);

// 6. Build app nodes
const usedNodeIds = new Set();
segments.forEach(s => { usedNodeIds.add(s.fromOsmId); usedNodeIds.add(s.toOsmId); });

const osmIdToAppId = {};
const appNodes = [];
let nc = 0;
usedNodeIds.forEach(osmId => {
  const pos = osmNodes[osmId];
  if (!pos) return;
  const appId = 'n' + nc++;
  osmIdToAppId[osmId] = appId;
  appNodes.push({ id: appId, osmId, lat: pos.lat, lng: pos.lng });
});

// 7. Node names from connected road names
const nodeRoadNames = {};
segments.forEach(s => {
  [s.fromOsmId, s.toOsmId].forEach(id => {
    if (!nodeRoadNames[id]) nodeRoadNames[id] = [];
    if (!nodeRoadNames[id].includes(s.name)) nodeRoadNames[id].push(s.name);
  });
});
appNodes.forEach(node => {
  const names = nodeRoadNames[node.osmId] || [];
  const unique = [...new Set(names)];
  if (!unique.length)      node.name = 'Junction ' + node.id;
  else if (unique.length === 1) node.name = unique[0] + ' End';
  else                          node.name = unique.slice(0, 2).join(' / ');
});

// 8. Seeded flood status — 10% red, 20% yellow, 70% green
function seededStatus(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) & 0xffffffff;
  const v = Math.abs(hash) % 100;
  if (v < 10) return 'red';
  if (v < 30) return 'yellow';
  return 'green';
}

const appRoads = [];
let rc = 0;
segments.forEach(s => {
  const fromId = osmIdToAppId[s.fromOsmId];
  const toId   = osmIdToAppId[s.toOsmId];
  if (!fromId || !toId) return;
  appRoads.push({
    id:       'r' + rc++,
    name:     s.name,
    highway:  s.highway,
    from:     fromId,
    to:       toId,
    distance: s.distance,
    status:   seededStatus(s.name + s.fromOsmId),
    coords:   s.coords
  });
});

console.log('App nodes:', appNodes.length, '| App roads:', appRoads.length);
const red    = appRoads.filter(r => r.status === 'red').length;
const yellow = appRoads.filter(r => r.status === 'yellow').length;
const green  = appRoads.filter(r => r.status === 'green').length;
console.log('Red:', red, '| Yellow:', yellow, '| Green:', green);

// Map center
const lats = appNodes.map(n => n.lat);
const lngs = appNodes.map(n => n.lng);
const cLat = ((Math.min(...lats) + Math.max(...lats)) / 2).toFixed(5);
const cLng = ((Math.min(...lngs) + Math.max(...lngs)) / 2).toFixed(5);
console.log('Map center:', cLat, cLng);

// 9. Write server-side data
const serverOutput = `// AUTO-GENERATED — Kengeri road network from OpenStreetMap
// ${appNodes.length} intersections, ${appRoads.length} road segments
// status: red=flooded | yellow=waterlogged | green=safe

const nodes = ${JSON.stringify(appNodes)};

const roads = ${JSON.stringify(appRoads)};

const roadNetwork = { nodes, edges: roads };

module.exports = { nodes, roads, roadNetwork };
`;
fs.writeFileSync(path.join(__dirname, '..', 'data', 'floodData.js'), serverOutput, 'utf8');
console.log('✅ Written data/floodData.js');

// 10. Write static site data (docs/)
const staticOutput = `const ALL_NODES = ${JSON.stringify(appNodes)};
const ALL_ROADS = ${JSON.stringify(appRoads)};
`;
fs.writeFileSync(path.join(__dirname, '..', 'docs', 'floodData.js'), staticOutput, 'utf8');
console.log('✅ Written docs/floodData.js');
console.log('   Center for map:', cLat, cLng);
