import express  from "express";
import morgan from 'morgan';
import { connectBd } from "./db.js";
connectBd()

const app = express();
app.use(morgan("dev"))
export default app