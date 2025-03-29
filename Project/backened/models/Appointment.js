const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  status: { type: String, enum: ["pending", "approved", "denied"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Appointment", AppointmentSchema);
