const express = require('express');
const router  = express.Router();
const { nodes, roads } = require('../data/floodData');

// GET /api/flood/roads — all roads with their status
router.get('/roads', (req, res) => {
  res.json({ success: true, roads });
});

// GET /api/flood/stats
router.get('/stats', (req, res) => {
  const red    = roads.filter(r => r.status === 'red').length;
  const yellow = roads.filter(r => r.status === 'yellow').length;
  const green  = roads.filter(r => r.status === 'green').length;

  res.json({
    success: true,
    stats: { red, yellow, green, total: roads.length }
  });
});

// POST /api/flood/report — crowdsourced update
router.post('/report', (req, res) => {
  const { roadId, status } = req.body;
  if (!roadId || !['red', 'yellow', 'green'].includes(status)) {
    return res.status(400).json({ success: false, message: 'roadId and valid status required' });
  }
  const road = roads.find(r => r.id === roadId);
  if (!road) return res.status(404).json({ success: false, message: 'Road not found' });

  road.status = status;
  res.json({ success: true, message: `${road.name} updated to ${status}`, road });
});

module.exports = router;
