import { Router } from "express";

import {
  login,
  logout,
  profile,
  register,
  verifyToken
} from "../controllers/auth.controller.js";
import { authQuired } from "../middlewares/validateToken.js";
import { ValidateSchema } from "../middlewares/validetorMiddewan.js";
import { loginSchemas, registerSchemas } from "../schemas/auth.schemas.js";
const router = Router();
router.post("/register", ValidateSchema(registerSchemas), register);
router.post("/login", ValidateSchema(loginSchemas), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authQuired, profile);
export default router;
