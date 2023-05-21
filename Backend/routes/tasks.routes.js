import {Router} from 'express'
import{
    getTasks,
    getTask,
    selectTask,
    updateTask,
    deleteTask,
} from '../controllers/tasks.controllers.js';
const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', selectTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);
export default router
