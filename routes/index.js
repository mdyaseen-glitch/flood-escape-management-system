const express = require('express');
const router  = express.Router();
const { nodes, roads } = require('../data/floodData');

router.get('/', (req, res) => {
  res.render('index', {
    nodes,
    roads,
    title: 'Smart Flood Escape Route — Koramangala'
  });
});

module.exports = router;
