import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    console.log(req.body);
    const newUSer = new User({
      username,
      email,
      password,
    });

    const userSaved = await newUSer.save();
    res.json(userSaved);
    res.send("registrando");
  } catch (error) {
    console.error(error);
  }
};
export const login = (req, res) => res.send("login");
