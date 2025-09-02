require("dotenv").config();
const connectDB = require("./config/dbConfig");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const userRouter = require("./routes/user.routes");

connectDB();

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to invoice generator services" });
});

// app.listen(8080, (err) => {
//   if (!err) {
//     console.log("Listening on port 8080");
//   }
// });

module.exports = app;
