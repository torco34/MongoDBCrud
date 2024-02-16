const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const useRoutes = require("./routes/user");
const app = express();
const port = process.env.PORT || 9000;
//middleware
app.use(express.json());

app.use("/api", useRoutes);

// rutas
app.get("/", (req, res) => {
  res.send("Welcome to my api ");
});

// connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connect base to mongodb atlas"))
  .catch((error) => console.error(error));
app.listen(port, () => console.log("esta funcionado", port));
