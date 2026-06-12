require("dotenv").config();
require("./scheduler");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const reminderRoutes = require("./routes/reminderRoutes");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Routes
app.use("/api/reminder", reminderRoutes);

// MongoDB Connection + Server Start
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected");

    app.listen(5001, () => {
      console.log("🚀 SERVER STARTED ON PORT 5001");
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
}

startServer();