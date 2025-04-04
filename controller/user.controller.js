const jwt = require("jsonwebtoken");
const User = require("./../model/user.model.js");
const bcrypt = require("bcrypt");
require("dotenv").config();

const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || email === "" || !password || password === "") {
    return res
      .status(400)
      .json({ message: "Veuillez saisir un email et un mot de passe" });
  }
  let user = await User.create({
    email: email,
    password: bcrypt.hashSync(password, 10),
  });
  res.status(201).json({
    id: user._id,
    email: user.email,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || email === "" || !password || password === "") {
    return res.status(400).json({ message: "login ou mot de passe incorrect" });
  }

  let user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).json({ error: "login ou mot de passe incorrect" });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: "login ou mot de passe incorrect" });
  }

  return res.status(200).json({
    _id: user._id,
    email: user.email,
    token: jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.JWT_KEY,
      { expiresIn: "24H" }
    ),
  });
};

module.exports = { register, login };