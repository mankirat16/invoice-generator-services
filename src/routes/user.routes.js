const express = require("express");
const { login, signup } = require("../controllers/user.controller");
const { validate } = require("../auth.middleware");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

router.get("/validate-token", validate, (req, res) => {
  res.status(200).json({
    message: "Token is valid",
    user: req.user
  });
});


module.exports = router;
