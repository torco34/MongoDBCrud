import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
console.log(TOKEN_SECRET, "totototot");
export const authQuired = (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }

    // El ID del usuario estará disponible en `decoded.id`
    console.log("ID del usuario:", decoded);
    req.decoded = decoded
     console.log("ID del usuario:", decoded.id);

    next();
  });
};
