/**
 * Dijkstra's Algorithm — Flood-aware routing for Koramangala
 *
 * Road status weights:
 *   green  → normal weight (distance)
 *   yellow → passable but penalised (distance × 1.5)
 *   red    → blocked (Infinity — skipped entirely for safe route)
 *
 * @param {Array}   nodes        - Array of { id, name, lat, lng }
 * @param {Array}   roads        - Array of { id, from, to, distance, status, coords }
 * @param {string}  sourceId     - Start node id
 * @param {string}  destId       - End node id
 * @param {string}  mode         - 'safe' (avoid red) | 'normal' (use all roads)
 * @returns {Object|null}
 */
function dijkstra(nodes, roads, sourceId, destId, mode = 'safe') {
  const nodeLookup = {};
  nodes.forEach(n => { nodeLookup[n.id] = n; });

  // Build adjacency list
  const adj = {};
  nodes.forEach(n => { adj[n.id] = []; });

  roads.forEach(road => {
    // In safe mode, skip red roads entirely
    if (mode === 'safe' && road.status === 'red') return;

    // Weight: green = distance, yellow = distance * 1.5
    const weight = road.status === 'yellow' ? road.distance * 1.5 : road.distance;

    adj[road.from].push({ to: road.to,   weight, road });
    adj[road.to].push({   to: road.from, weight, road });
  });

  // Dijkstra
  const dist = {};
  const prev = {};
  const visited = new Set();

  nodes.forEach(n => {
    dist[n.id] = Infinity;
    prev[n.id] = null;
  });
  dist[sourceId] = 0;

  const pq = [{ id: sourceId, dist: 0 }];

  while (pq.length > 0) {
    pq.sort((a, b) => a.dist - b.dist);
    const { id: u } = pq.shift();

    if (visited.has(u)) continue;
    visited.add(u);
    if (u === destId) break;

    for (const { to: v, weight, road } of adj[u]) {
      if (visited.has(v)) continue;
      const alt = dist[u] + weight;
      if (alt < dist[v]) {
        dist[v] = alt;
        prev[v] = { nodeId: u, road };
        pq.push({ id: v, dist: alt });
      }
    }
  }

  if (dist[destId] === Infinity) return null;

  // Reconstruct path
  const pathNodeIds = [];
  const pathRoads   = [];
  let cur = destId;

  while (cur !== null) {
    pathNodeIds.unshift(cur);
    if (prev[cur]) {
      pathRoads.unshift(prev[cur].road);
    }
    cur = prev[cur] ? prev[cur].nodeId : null;
  }

  const pathNodes = pathNodeIds.map(id => nodeLookup[id]);

  // Build a merged polyline from all road segments in order
  const polyline = [];
  pathRoads.forEach((road, i) => {
    const fromNode = pathNodeIds[i];
    // coords may be stored from→to or to→from; detect direction
    const roadFrom = road.from;
    const coords   = road.coords || [
      [nodeLookup[road.from].lat, nodeLookup[road.from].lng],
      [nodeLookup[road.to].lat,   nodeLookup[road.to].lng]
    ];
    const orderedCoords = fromNode === roadFrom ? coords : [...coords].reverse();
    // Avoid duplicate junction point between segments
    if (polyline.length > 0) orderedCoords.shift();
    polyline.push(...orderedCoords);
  });

  const totalDistance = Math.round(
    pathRoads.reduce((sum, r) => sum + r.distance, 0) * 10
  ) / 10;

  return {
    pathNodeIds,
    pathNodes,
    pathRoads,
    polyline,
    totalDistance,
    hasYellow: pathRoads.some(r => r.status === 'yellow'),
    hasRed:    pathRoads.some(r => r.status === 'red')
  };
}

/**
 * Returns both the safest route and the shortest (ignoring flood status).
 */
function getRoutes(nodes, roads, sourceId, destId) {
  const safeRoute   = dijkstra(nodes, roads, sourceId, destId, 'safe');
  const normalRoute = dijkstra(nodes, roads, sourceId, destId, 'normal');
  return { safeRoute, normalRoute };
}

module.exports = { dijkstra, getRoutes };
