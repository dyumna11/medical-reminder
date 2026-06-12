const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
      console.log("BODY:", req.body);
  
      const { name, email, password } = req.body;
  
      const existing = await User.findOne({ email });
  
      if (existing) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      await user.save();
  
      res.json({
        message: "Registered successfully",
      });
  
    } catch (err) {
      console.error("REGISTER ERROR:", err);
      res.status(500).json({
        error: err.message,
      });
    }
  });


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const valid = await bcrypt.compare(
    password,
    user.password
  );

  if (!valid) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }
  console.log("Password match:", valid);

  const token = jwt.sign(
    {
      userId: user._id,
    },
    process.env.JWT_SECRET
  );

  res.json({
    token,
  });
});
module.exports = router;