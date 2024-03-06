import { TOKEN_SECRET } from "../config.js";
import  jwt  from "jsonwebtoken";
export const createdAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: 1,
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
