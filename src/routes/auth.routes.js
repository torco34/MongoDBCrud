import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authQuired } from "../middlewares/validateToken.js";
import { registerSchemas, loginSchemas } from "../schemas/auth.schemas.js";
import { ValidateSchema } from "../middlewares/validetorMiddewan.js";
const router = Router();
router.post("/register", ValidateSchema(registerSchemas), register);
router.post("/login", ValidateSchema(loginSchemas), login);
router.post("/logout", logout);
router.get("/profile", authQuired, profile);
export default router;
