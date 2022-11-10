import express from 'express';
export const router = express.Router();

import {
  createTask,
  getTaskById,
  getTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/TaskSqlController.js" ;
import { importToMongo } from "../controllers/importToMongo.js";


router.param("TaskId", getTaskById);
router.get("/Tasks/", getAllTasks);
router.get("/Task/:TaskId/", getTask);
router.post("/Task", createTask);
router.put("/Task/:TaskId", updateTask);
router.delete("/Task/:TaskId", deleteTask);
router.post("/Backup", importToMongo);
