require("dotenv").config();
console.log("EMAIL =", process.env.EMAIL);
console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("PASSWORD EXISTS =", !!process.env.PASSWORD);
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP ERROR:", error);
  } else {
    console.log("SMTP READY");
  }
});
const sendEmail = async (to, medicine, time) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject: "Medicine Reminder",
      text: `Time to take your medicine: ${medicine} at ${time}`,
    });

    console.log("✅ Email sent:", info.response);
  } catch (err) {
    console.error("❌ EMAIL ERROR:", err);
  }
};
module.exports = sendEmail;