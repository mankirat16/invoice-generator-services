const jwt = require("jsonwebtoken");

exports.validate = function (req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token || token === "undefined") {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }
};
