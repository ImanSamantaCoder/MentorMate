const router = require("express").Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/test", (req, res) => {
    res.send("✅ Auth route is working!");
  });
  
module.exports = router;
