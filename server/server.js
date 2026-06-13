require("dotenv").config();
require("dotenv").config();

console.log("SERVER EMAIL =", process.env.EMAIL);
console.log("SERVER PASSWORD EXISTS =", !!process.env.PASSWORD);
require("./scheduler");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const reminderRoutes = require("./routes/reminderRoutes");

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://medical-reminder.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/reminder", reminderRoutes);
app.use("/api/auth", authRoutes);
// Routes
app.get("/", (req, res) => {
  res.send("Medical Reminder Backend Running 🚀");
});
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