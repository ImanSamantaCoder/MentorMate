const router = require("express").Router();
const { verifyToken, verifyAdmin } = require("../middleware/auth");
const { teacher,requestAppointment, getAppointments } = require("../controllers/studentController");
router.get("/teacher",verifyToken,teacher);
router.post("/appointment", verifyToken, requestAppointment);
router.get("/appointments", verifyToken, getAppointments);

module.exports = router;
