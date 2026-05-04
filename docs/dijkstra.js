// Dijkstra's Algorithm — client-side, flood-aware routing for Koramangala
// Road status weights: green=normal, yellow=1.5x penalty, red=blocked(safe mode)

function dijkstra(nodes, roads, sourceId, destId, mode) {
  mode = mode || 'safe';
  var nodeLookup = {};
  nodes.forEach(function(n) { nodeLookup[n.id] = n; });

  var adj = {};
  nodes.forEach(function(n) { adj[n.id] = []; });

  roads.forEach(function(road) {
    if (mode === 'safe' && road.status === 'red') return;
    var weight = road.status === 'yellow' ? road.distance * 1.5 : road.distance;
    adj[road.from].push({ to: road.to,   weight: weight, road: road });
    adj[road.to  ].push({ to: road.from, weight: weight, road: road });
  });

  var dist    = {};
  var prev    = {};
  var visited = {};

  nodes.forEach(function(n) { dist[n.id] = Infinity; prev[n.id] = null; });
  dist[sourceId] = 0;

  var pq = [{ id: sourceId, dist: 0 }];

  while (pq.length > 0) {
    pq.sort(function(a, b) { return a.dist - b.dist; });
    var u = pq.shift().id;
    if (visited[u]) continue;
    visited[u] = true;
    if (u === destId) break;

    var neighbours = adj[u];
    for (var i = 0; i < neighbours.length; i++) {
      var nb  = neighbours[i];
      var v   = nb.to;
      if (visited[v]) continue;
      var alt = dist[u] + nb.weight;
      if (alt < dist[v]) {
        dist[v] = alt;
        prev[v] = { nodeId: u, road: nb.road };
        pq.push({ id: v, dist: alt });
      }
    }
  }

  if (dist[destId] === Infinity) return null;

  // Reconstruct path
  var pathNodeIds = [];
  var pathRoads   = [];
  var cur = destId;
  while (cur !== null) {
    pathNodeIds.unshift(cur);
    if (prev[cur]) pathRoads.unshift(prev[cur].road);
    cur = prev[cur] ? prev[cur].nodeId : null;
  }

  var pathNodes = pathNodeIds.map(function(id) { return nodeLookup[id]; });

  // Build merged polyline respecting road direction
  var polyline = [];
  pathRoads.forEach(function(road, i) {
    var fromNode = pathNodeIds[i];
    var coords   = road.coords || [
      [nodeLookup[road.from].lat, nodeLookup[road.from].lng],
      [nodeLookup[road.to  ].lat, nodeLookup[road.to  ].lng]
    ];
    var ordered = fromNode === road.from ? coords.slice() : coords.slice().reverse();
    if (polyline.length > 0) ordered = ordered.slice(1); // remove duplicate junction
    polyline = polyline.concat(ordered);
  });

  var totalDist = 0;
  pathRoads.forEach(function(r) { totalDist += r.distance; });
  totalDist = Math.round(totalDist * 10) / 10;

  return {
    pathNodeIds:   pathNodeIds,
    pathNodes:     pathNodes,
    pathRoads:     pathRoads,
    polyline:      polyline,
    totalDistance: totalDist,
    hasYellow:     pathRoads.some(function(r) { return r.status === 'yellow'; }),
    hasRed:        pathRoads.some(function(r) { return r.status === 'red'; })
  };
}

function getRoutes(nodes, roads, sourceId, destId) {
  return {
    safeRoute:   dijkstra(nodes, roads, sourceId, destId, 'safe'),
    normalRoute: dijkstra(nodes, roads, sourceId, destId, 'normal')
  };
}
