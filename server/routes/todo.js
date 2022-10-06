import express from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.post("/:id", deleteTodo);
router.patch("/:id", updateTodo);

export default router;
