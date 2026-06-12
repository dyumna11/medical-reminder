const express = require("express");
const Reminder = require("../models/Reminder");

const router = express.Router();
router.get("/reminder", async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const sendEmail = require("../sendEmail");


router.post("/", async (req, res) => {
  try {
 
    console.log("📥 Reminder received:", req.body);

    const reminder = new Reminder(req.body);
    await reminder.save();
    try {
      await sendEmail(
        req.body.email,
        req.body.medicines[0].name,
        "Test Time"
      );
    } catch (err) {
      console.error("EMAIL ERROR:", err);
    }
    res.json({ message: "Reminder saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;