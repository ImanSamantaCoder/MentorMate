const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/mail");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPass,
      role,
      status: "pending",  // Ensure status is always "pending"
    });

    await user.save();
    res.json({ message: "Registered. Awaiting admin approval." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User not found" });

    if (user.status !== "approved") {
      return res.status(403).json({ message: "Awaiting admin approval" });
    }

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(401).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // ✅ Store JWT in an HTTP-Only cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevents client-side access (security)
      secure: false, // Set to `true` in production (HTTPS only)
      sameSite: "Lax", // Allows sending cookies with same-site requests
    });
  

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.logout = (req, res) => {
  res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
  res.json({ message: "Logged out successfully" });
};
