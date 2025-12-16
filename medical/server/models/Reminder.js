const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  frequency: { type: String, required: true },
  when: [String],
  times: {
    type: Map,
    of: String,
  },
});

const ReminderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: Number,
    number: String,
    medicines: [MedicineSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminder", ReminderSchema);

