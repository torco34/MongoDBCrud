import { Router } from "express";
import { authQuired } from "../middlewares/validateToken.js";
import {
  getTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
} from "../controllers/tasks.controller.js";
const router = Router();
import { ValidateSchema } from "../middlewares/validetorMiddewan.js";
import { createTaskSchema } from "../schemas/task.schema.js";
router.get("/tasks", authQuired, getTasks, (req, res) => res.send("tasks"));
router.get("/tasks/:id", authQuired, getTask, (req, res) => res.send("tasks"));
router.post("/tasks", authQuired, ValidateSchema(createTaskSchema), createTasks, (req, res) => res.send("tasks"));
router.delete("/tasks/:id", authQuired, deleteTasks, (req, res) =>
  res.send("tasks")
);
router.put("/tasks/:id", authQuired, updateTasks, (req, res) =>
  res.send("tasks")
);
export default router;
