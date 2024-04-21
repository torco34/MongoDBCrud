import express from "express";
import morgan from "morgan";
import { connectBd } from "./db.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/tasks.routes.js";
import cors from "cors";
connectBd();

const app = express();
app.use(cors({ origin: "http://localhost:5173 " }));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taskRouter);
app.get("/", (req, res) => {
  res.send("¡Bienvenido a mi servidor Express!");
});
export default app;
