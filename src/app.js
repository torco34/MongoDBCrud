import express from "express";
import morgan from "morgan";
import { connectBd } from "./db.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/tasks.routes.js";
connectBd();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taskRouter);

export default app;
