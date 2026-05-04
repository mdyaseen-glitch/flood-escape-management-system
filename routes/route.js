const express = require('express');
const router  = express.Router();
const { nodes, roads } = require('../data/floodData');
const { getRoutes }    = require('../algorithms/dijkstra');

// GET /api/route/nodes
router.get('/nodes', (req, res) => {
  res.json({ success: true, nodes });
});

// POST /api/route/calculate
router.post('/calculate', (req, res) => {
  const { sourceId, destId } = req.body;

  if (!sourceId || !destId) {
    return res.status(400).json({ success: false, message: 'sourceId and destId are required' });
  }

  const nodeIds = nodes.map(n => n.id);
  if (!nodeIds.includes(sourceId)) {
    return res.status(400).json({ success: false, message: `Unknown source: "${sourceId}"` });
  }
  if (!nodeIds.includes(destId)) {
    return res.status(400).json({ success: false, message: `Unknown destination: "${destId}"` });
  }
  if (sourceId === destId) {
    return res.status(400).json({ success: false, message: 'Source and destination cannot be the same' });
  }

  try {
    const { safeRoute, normalRoute } = getRoutes(nodes, roads, sourceId, destId);

    res.json({
      success: true,
      source:      nodes.find(n => n.id === sourceId),
      destination: nodes.find(n => n.id === destId),
      safeRoute:   safeRoute   ? formatRoute(safeRoute)   : null,
      normalRoute: normalRoute ? formatRoute(normalRoute) : null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

function formatRoute(r) {
  return {
    pathNodeIds:   r.pathNodeIds,
    nodeNames:     r.pathNodes.map(n => n.name),
    polyline:      r.polyline,
    totalDistance: r.totalDistance,
    hasYellow:     r.hasYellow,
    hasRed:        r.hasRed,
    roads: r.pathRoads.map(rd => ({
      name:     rd.name,
      status:   rd.status,
      distance: rd.distance
    }))
  };
}

module.exports = router;
