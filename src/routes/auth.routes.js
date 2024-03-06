import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authQuired } from "../middlewares/validateToken.js";
const router = Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authQuired, profile);
export default router;
