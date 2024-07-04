import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { TOKEN_SECRET } from "../config.js";
import { createdAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["Email ya  existe"]);
    const passwordHash = await bcrypt.hash(password, 10);
    const newUSer = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUSer.save();
    const token = await createdAccessToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "email not fund" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "password  incorrecto" });

    const token = await createdAccessToken({ id: userFound._id });
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
export const profile = async (req, res) => {
  const userFund = await User.findById(req.decoded.id);
  if (!userFund) return res.status(400).json({ message: "user no func" });
  return res.json({
    id: userFund._id,
    username: userFund.username,
    email: userFund.email,
    createdAt: userFund.createdAt,
    updatedAt: userFund.updatedAt,
  });
};
export const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Token no válido" });
    }
    const userFound = await User.findById(user.id);
    if (!userFound) {
      return res.status(401).json({ message: "Token no válido" });
    }

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
}