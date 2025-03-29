const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["student", "teacher", "admin"], default: "student" },
  status: { type: String, enum: ["pending", "approved", "denied"], default: "pending" },
});

module.exports = mongoose.model("User", UserSchema);
