const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const tasksRouter = require('./routes/tasks');
const goalsRouter = require('./routes/goals');

const app = express();

// Middleware para el API Key
function apiKeyAuth(req, res, next) {
  const apiKey = req.headers['authorization'];
  if (!apiKey || apiKey !== 'tu_apikey_aqui') {
    return res.status(401).json({ message: 'Unauthorized: Invalid API Key' });
  }
  next();
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(apiKeyAuth); // Aplica a todas las rutas siguientes

app.use('/tasks', tasksRouter);
app.use('/goals', goalsRouter);

// Manejo de 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
