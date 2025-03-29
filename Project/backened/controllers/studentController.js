const Appointment = require("../models/Appointment");

exports.requestAppointment = async (req, res) => {
  const { teacherId, date } = req.body;

  try {
    const appointment = new Appointment({
      student: req.user.id,
      teacher: teacherId,
      date,
    });
    await appointment.save();
    res.json({ message: "Appointment Requested" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ student: req.user.id })
      .populate("teacher", "name email")
      .sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
