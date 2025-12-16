const express = require("express");
const Reminder = require("../models/Reminder");

const router = express.Router();

// GET all reminders
router.get("/reminder", async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new reminder
router.post("/reminder", async (req, res) => {
  try {
    console.log("📥 Reminder received:", req.body);

    const reminder = new Reminder(req.body);
    await reminder.save();

    res.json({ message: "Reminder saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
