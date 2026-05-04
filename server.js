const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./routes/index');
const floodRouter = require('./routes/flood');
const routeRouter = require('./routes/route');

app.use('/', indexRouter);
app.use('/api/flood', floodRouter);
app.use('/api/route', routeRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🌊 Smart Flood Nav running at http://localhost:${PORT}`);
});

module.exports = app;
