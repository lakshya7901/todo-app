import express from "express";
import { allTasks, createTask, deleteTask, taskById, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.get('/', allTasks);

router.put('/:id', taskById);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

export default router;