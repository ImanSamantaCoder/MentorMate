require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());   
// DB Connection
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/student", require("./routes/student"));
app.use("/api/teacher", require("./routes/teacher"));
app.use("/api/admin", require("./routes/admin"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
const bcrypt = require("bcryptjs");

async function hashPassword() {
  const hashedPassword = await bcrypt.hash("123a", 10);
  console.log(hashedPassword);
}

hashPassword();
const mongoose = require("mongoose");

const User = require("./models/User"); // Update with the correct path

async function createAdmin() {
  try {
    const existingAdmin = await User.findOne({ role: "admin" });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("admin123", 10); // Secure password

      const admin = new User({
        name: "Super Admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
        status: "approved"
      });

      await admin.save();
      console.log("✅ Admin account created: admin@example.com / admin123");
    } else {
      console.log("✅ Admin already exists!");
    }
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
  }
}

// Call the function after connecting to MongoDB
mongoose.connection.once("open", createAdmin);
