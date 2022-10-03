import express from "express";
import { getTodos, createTodo } from "../controllers/todo.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/", createTodo);

export default router;
