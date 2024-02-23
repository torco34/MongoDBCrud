import express from "express";
import morgan from "morgan";
import { connectBd } from "./db.js";
import authRoutes from "./routes/auth.routes.js";

connectBd();

const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use("/api", authRoutes);
export default app;
