const Appointment = require("../models/Appointment");
const transporter = require("../config/mail");

exports.getPendingAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ teacher: req.user.id, status: "pending" })
      .populate("student", "name email");
    res.json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true }).populate("student");

    // Email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: appointment.student.email,
      subject: "Appointment Update",
      text: `Your appointment has been ${status}.`,
    });

    res.json({ message: `Appointment ${status}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
