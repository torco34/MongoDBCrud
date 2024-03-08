import { Router } from "express";
import { authQuired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/tasks", authQuired, (req, res) => res.send("tasks"));
router.get("/tasks/:id", authQuired, (req, res) => res.send("tasks"));
router.post("/tasks", authQuired, (req, res) => res.send("tasks"));
router.delete("/tasks/:id", authQuired, (req, res) => res.send("tasks"));
router.put("/tasks/:id", authQuired, (req, res) => res.send("tasks"));
export default router;
