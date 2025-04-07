const Appointment = require("../models/Appointment");
const sendMail = require("../config/mail"); // ✅ Corrected import

exports.getPendingAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      teacher: req.user.id,
      status: "pending",
    }).populate("student", "name email");

    res.json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    // Find the appointment by ID and populate student
    const appointment = await Appointment.findById(id).populate("student");

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Ensure only the assigned teacher can update
    if (appointment.teacher.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to update this appointment" });
    }

    // Update status and save
    appointment.status = status;
    await appointment.save();

    // Try sending email notification
    try {
      await sendMail(
        appointment.student.email,
        "Appointment Update",
        `Your appointment has been ${status}.`
      );
    } catch (emailErr) {
      console.error("❌ Failed to send email:", emailErr.message);
    }

    res.json({ message: `Appointment ${status}` });
  } catch (err) {
    console.error("❌ Error in updating appointment:", err.message);
    res.status(400).json({ error: err.message });
  }
};
