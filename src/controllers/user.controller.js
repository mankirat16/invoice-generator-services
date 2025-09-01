const userService = require("../services/user.service");

exports.login = async (req, res, next) => {
  try {
    const { token, userId } = await userService.login(req, res);
    res.status(200).json({ message: "Login successful", token, userId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { token, userId } = await userService.signup(req, res);
    res.status(200).json({ message: "signup successful", token, userId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
