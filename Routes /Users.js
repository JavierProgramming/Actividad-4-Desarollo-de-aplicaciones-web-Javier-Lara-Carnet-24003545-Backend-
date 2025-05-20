var express = require('express');
var router = express.Router();

// Lista simple de usuarios para ejemplo
let users = [
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' }
];

// GET /users - Devuelve la lista de usuarios
router.get('/', function(req, res, next) {
  res.status(200).json({ users });
});

module.exports = router;
