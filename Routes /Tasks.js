const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, name: 'Buy groceries', description: 'Milk, Bread, Cheese', dueDate: '2025-06-01' },
  { id: 2, name: 'Finish project', description: 'Complete REST API', dueDate: '2025-06-10' }
];

// Obtener todas las tareas
router.get('/getTasks', (req, res) => {
  res.status(200).json(tasks);
});

// Agregar tarea nueva
router.post('/addTask', (req, res) => {
  const { name, description, dueDate } = req.body;
  if (!name || !description || !dueDate) {
    return res.status(400).json({ message: 'Bad Request: Missing parameters' });
  }
  const newTask = { id: tasks.length + 1, name, description, dueDate };
  tasks.push(newTask);
  res.status(200).json({ message: 'Task added', task: newTask });
});

// Eliminar tarea por id
router.delete('/removeTask/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({ message: 'Bad Request: Invalid task id' });
  }
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);

  if (tasks.length === initialLength) {
    return res.status(400).json({ message: 'Bad Request: Task not found' });
  }

  res.status(200).json({ message: 'Task removed' });
});

module.exports = router;
