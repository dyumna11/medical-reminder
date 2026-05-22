const cron = require("node-cron");
const Reminder = require("./models/Reminder");
const sendEmail = require("./sendEmail");

cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();

    const currentTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    console.log("⏰ Checking reminders at:", currentTime);

    const reminders = await Reminder.find();

    reminders.forEach((user) => {
      user.medicines.forEach((med) => {
        med.when.forEach((moment) => {
          const medicineTime = med.times.get(moment);

          if (medicineTime === currentTime) {
            console.log(
              `📨 Sending reminder to ${user.email} for ${med.name}`
            );

            sendEmail(user.email, med.name, currentTime);
          }
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
});