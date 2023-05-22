const express = require('express');
const {
    getTasks,
    getTask,
    selectTask,
    updateTask,
    deleteTask,
    createTask
} = require('../controllers/tasks.controllers');
const router = express.Router();

router.get('/tasks', getTasks);

router.get('/task/:id', getTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

module.exports = router;
