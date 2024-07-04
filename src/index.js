import app from "./app.js";
// app.listen(3000);
// const PORT = 3000;
const PORT = process.env.PORT || 3000;
console.log("este es el pue", 3000);
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});