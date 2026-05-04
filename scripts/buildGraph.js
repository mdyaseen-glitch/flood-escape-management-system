/**
 * Processes osm_raw.json → data/floodData.js
 *
 * Strategy:
 * 1. Load all OSM ways (roads) and their node sequences
 * 2. Find shared nodes between roads → these are real intersections
 * 3. For each named road, build a segment between consecutive intersections
 * 4. Keep only roads that have at least one intersection (connected graph)
 * 5. Assign flood status randomly for demo: ~25% red, ~30% yellow, ~45% green
 * 6. Write out data/floodData.js
 */

const fs   = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'osm_raw.json'), 'utf8'));

// ── 1. Build node lookup (OSM node id → {lat, lng}) ──────────────────────────
const osmNodes = {};
raw.elements.filter(e => e.type === 'node').forEach(n => {
  osmNodes[n.id] = { lat: n.lat, lng: n.lon };
});

// ── 2. Collect ways with names ────────────────────────────────────────────────
const ways = raw.elements.filter(e =>
  e.type === 'way' &&
  e.tags?.name &&
  e.nodes?.length >= 2
);

console.log(`Total named ways: ${ways.length}`);

// ── 3. Find intersection nodes (OSM node ids shared by ≥2 ways) ──────────────
const nodeWayCount = {};
ways.forEach(way => {
  way.nodes.forEach(nid => {
    nodeWayCount[nid] = (nodeWayCount[nid] || 0) + 1;
  });
});

// Also treat first and last node of every way as endpoints (degree-1 nodes)
ways.forEach(way => {
  const first = way.nodes[0];
  const last  = way.nodes[way.nodes.length - 1];
  nodeWayCount[first] = (nodeWayCount[first] || 0) + 1;
  nodeWayCount[last]  = (nodeWayCount[last]  || 0) + 1;
});

const intersectionNodeIds = new Set(
  Object.entries(nodeWayCount)
    .filter(([, count]) => count >= 2)
    .map(([id]) => parseInt(id))
);

console.log(`Intersection nodes: ${intersectionNodeIds.size}`);

// ── 4. For each way, split into segments between intersection nodes ────────────
// Each segment: from-intersection → to-intersection with intermediate coords

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 +
            Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

const segments = []; // { fromOsmId, toOsmId, name, highway, coords, distance }

ways.forEach(way => {
  const name    = way.tags.name;
  const highway = way.tags.highway;
  const nodeSeq = way.nodes;

  let segStart = 0;

  for (let i = 1; i < nodeSeq.length; i++) {
    const nid = nodeSeq[i];
    const isLast         = i === nodeSeq.length - 1;
    const isIntersection = intersectionNodeIds.has(nid);

    if (isIntersection || isLast) {
      const fromId = nodeSeq[segStart];
      const toId   = nid;

      if (fromId === toId) { segStart = i; continue; }

      // Build coordinate array for this segment
      const coords = [];
      let dist = 0;
      for (let j = segStart; j <= i; j++) {
        const n = osmNodes[nodeSeq[j]];
        if (!n) continue;
        coords.push([n.lat, n.lng]);
        if (j > segStart) {
          const prev = osmNodes[nodeSeq[j-1]];
          if (prev) dist += haversineKm(prev.lat, prev.lng, n.lat, n.lng);
        }
      }

      if (coords.length >= 2) {
        segments.push({
          fromOsmId: fromId,
          toOsmId:   toId,
          name,
          highway,
          coords,
          distance: Math.round(dist * 100) / 100
        });
      }

      segStart = i;
    }
  }
});

console.log(`Total segments: ${segments.length}`);

// ── 5. Collect only intersection nodes that are actually used ─────────────────
const usedNodeIds = new Set();
segments.forEach(s => {
  usedNodeIds.add(s.fromOsmId);
  usedNodeIds.add(s.toOsmId);
});

// Build app node list with stable string IDs
const osmIdToAppId = {};
const appNodes = [];

let nodeCounter = 0;
usedNodeIds.forEach(osmId => {
  const pos = osmNodes[osmId];
  if (!pos) return;
  const appId = `n${nodeCounter++}`;
  osmIdToAppId[osmId] = appId;
  appNodes.push({ id: appId, osmId, lat: pos.lat, lng: pos.lng });
});

// ── 6. Assign names to key nodes from nearby road names ──────────────────────
// For each node, find the most common road name among its connected segments
const nodeRoadNames = {};
segments.forEach(s => {
  [s.fromOsmId, s.toOsmId].forEach(osmId => {
    if (!nodeRoadNames[osmId]) nodeRoadNames[osmId] = [];
    nodeRoadNames[osmId].push(s.name);
  });
});

appNodes.forEach(node => {
  const names = nodeRoadNames[node.osmId] || [];
  if (names.length === 0) {
    node.name = `Junction ${node.id}`;
  } else if (names.length === 1) {
    node.name = `${names[0]} End`;
  } else {
    // Intersection of two different roads
    const unique = [...new Set(names)];
    node.name = unique.slice(0, 2).join(' / ');
  }
});

// ── 7. Build app road segments ────────────────────────────────────────────────
// Flood status distribution: ~10% red, ~20% yellow, ~70% green
// Seeded on road name so it stays consistent across restarts
function seededStatus(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) & 0xffffffff;
  }
  const v = Math.abs(hash) % 100;
  if (v < 10) return 'red';      // 10% flooded
  if (v < 30) return 'yellow';   // 20% waterlogged
  return 'green';                 // 70% safe
}

const appRoads = [];
let roadCounter = 0;

segments.forEach(s => {
  const fromId = osmIdToAppId[s.fromOsmId];
  const toId   = osmIdToAppId[s.toOsmId];
  if (!fromId || !toId) return;

  appRoads.push({
    id:       `r${roadCounter++}`,
    name:     s.name,
    highway:  s.highway,
    from:     fromId,
    to:       toId,
    distance: s.distance,
    status:   seededStatus(s.name + s.fromOsmId),
    coords:   s.coords
  });
});

console.log(`App nodes: ${appNodes.length}`);
console.log(`App roads: ${appRoads.length}`);

// ── 8. Write output ───────────────────────────────────────────────────────────
const output = `// AUTO-GENERATED from OpenStreetMap data via scripts/buildGraph.js
// Real Koramangala road network — ${appNodes.length} intersections, ${appRoads.length} road segments
// Status: red=flooded/impassable | yellow=waterlogged/passable | green=safe
// Statuses are seeded-random for demonstration purposes.

const nodes = ${JSON.stringify(appNodes, null, 2)};

const roads = ${JSON.stringify(appRoads, null, 2)};

const roadNetwork = { nodes, edges: roads };

module.exports = { nodes, roads, roadNetwork };
`;

const outPath = path.join(__dirname, '..', 'data', 'floodData.js');
fs.writeFileSync(outPath, output, 'utf8');

console.log(`\n✅ Written to data/floodData.js`);
console.log(`   ${appNodes.length} nodes, ${appRoads.length} road segments`);

// Status summary
const red    = appRoads.filter(r => r.status === 'red').length;
const yellow = appRoads.filter(r => r.status === 'yellow').length;
const green  = appRoads.filter(r => r.status === 'green').length;
console.log(`   🔴 Red:    ${red}`);
console.log(`   🟡 Yellow: ${yellow}`);
console.log(`   🟢 Green:  ${green}`);
