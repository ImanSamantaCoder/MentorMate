require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());
app.use(cookieParser());

// ✅ Proper CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow credentials (cookies) to be sent
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// DB Connection
connectDB();
const createAdmin = async () => {
  try {
    const existingTeacher = await User.findOne({ email: "arghya@example.com" });

    if (!existingTeacher) {
      const hashedPassword = await bcrypt.hash("arghya123", 10);
      const admin = new User({
        name: "arghya",
        email: "arghya@example.com",
        password: hashedPassword,
        role: "teacher",
        status:"approved",
      });

      await admin.save();
      console.log("✅ teacher created successfully!");
    } else {
      console.log("⚠️ Teacher already exists.");
    }
  } catch (error) {
    console.error("❌ Error creating admin:", error);
  }
};

// Call admin creation function
createAdmin();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/student", require("./routes/student"));
app.use("/api/teacher", require("./routes/teacher"));
app.use("/api/admin", require("./routes/admin"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
