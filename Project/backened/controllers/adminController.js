const User = require("../models/User");
const sendMail = require("../config/mail"); // Import the sendMail function

exports.getPendingStudents = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const students = await User.find({ status: "pending" });
    res.json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.changeStatus = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const { status } = req.body;
    if (!["approved", "denied"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    // Find the student by ID and update their status
    const student = await User.findByIdAndUpdate(req.params.id, { status }, { new: true });

    // If status is 'approved', send an email
    if (status === "approved") {
      const emailResponse = await sendMail(
        student.email,
        "Your Registration has been Approved",
        `Congratulations ${student.name}! Your registration has been approved.`,
        `<h2>Congratulations ${student.name}!</h2><p>Your registration has been approved at mentormate app. You can now access your account.</p>`
      );

      if (!emailResponse.success) {
        return res.status(500).json({ error: "Failed to send email." });
      }
    }

    res.json({ message: `Student status changed to ${status}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
