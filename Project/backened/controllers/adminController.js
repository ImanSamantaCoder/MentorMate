const User = require("../models/User");
const transporter = require("../config/mail");

exports.getPendingStudents = async (req, res) => {
  const students = await User.find({ role: "student", status: "pending" });
  res.json(students);
};

exports.changeStatus = async (req, res) => {
  const { status } = req.body;
  const student = await User.findByIdAndUpdate(req.params.id, { status }, { new: true });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: student.email,
    subject: "Account Status Updated",
    text: `Your registration has been ${status}.`,
  });

  res.json({ message: `Student ${status}` });
};
