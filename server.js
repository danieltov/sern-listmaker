// * ==================== SERVER SETUP ==================== *//
const express = require('express');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 5001;

// * ==================== MIDDLEWARE ==================== *//
app.use(logger('dev'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
// * Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// * ==================== ROUTES ==================== *//
// ^ Soon

// * ==================== CONNECT DB ==================== *//
// ^ Eventually

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
