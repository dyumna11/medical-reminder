const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(to, medicine, time) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: "Medicine Reminder",
      html: `<p>Time to take <b>${medicine}</b> at ${time}</p>`,
    });

    console.log("EMAIL SENT:", data);
  } catch (err) {
    console.error("EMAIL ERROR:", err);
  }
}

module.exports = sendEmail;