const express = require('express');
const router = express.Router();

let goals = [
  { id: 1, name: 'Learn Node.js', description: 'Complete REST API tutorial', dueDate: '2025-07-01' }
];

// Obtener todas las metas
router.get('/getGoals', (req, res) => {
  res.status(200).json(goals);
});

// Agregar meta nueva
router.post('/addGoal', (req, res) => {
  const { name, description, dueDate } = req.body;
  if (!name || !description || !dueDate) {
    return res.status(400).json({ message: 'Bad Request: Missing parameters' });
  }
  const newGoal = { id: goals.length + 1, name, description, dueDate };
  goals.push(newGoal);
  res.status(200).json({ message: 'Goal added', goal: newGoal });
});

// Eliminar meta por id
router.delete('/removeGoal/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({ message: 'Bad Request: Invalid goal id' });
  }
  const initialLength = goals.length;
  goals = goals.filter(goal => goal.id !== id);

  if (goals.length === initialLength) {
    return res.status(400).json({ message: 'Bad Request: Goal not found' });
  }

  res.status(200).json({ message: 'Goal removed' });
});

module.exports = router;
