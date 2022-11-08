import express from 'express';
export const router = express.Router();

import {
  createTodo,
  getTodoById,
  getTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/TodoController.js" ;

router.param("todoId", getTodoById);
router.get("/todos/", getAllTodos);
router.get("/todo/:todoId/", getTodo);
router.post("/todo", createTodo);
router.put("/todo/:todoId", updateTodo);
router.delete("/todo/:todoId", deleteTodo);
