const User = require("../models/User");

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

    const student = await User.findByIdAndUpdate(req.params.id, { status }, { new: true });

    res.json({ message: `Student status changed to ${status}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
