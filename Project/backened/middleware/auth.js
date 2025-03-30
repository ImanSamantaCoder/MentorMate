const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // ✅ Get token from HTTP-Only cookie

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // ✅ Attach user data to request
    res.send("hello");
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
};

module.exports = { verifyToken, verifyAdmin };

