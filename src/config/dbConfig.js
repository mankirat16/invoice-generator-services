const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = conn.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw new Error("Database connection failed");
  }
}

module.exports = connectDB;
