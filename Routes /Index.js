var express = require('express');
var router = express.Router();

// GET / - Mensaje de bienvenida simple
router.get('/', function(req, res, next) {
  res.status(200).json({ message: 'Welcome to the Task & Goals API' });
});

module.exports = router;
