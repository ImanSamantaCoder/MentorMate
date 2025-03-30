const router = require("express").Router();
const { verifyToken, verifyAdmin } = require("../middleware/auth");
const { requestAppointment, getAppointments } = require("../controllers/studentController");

router.post("/appointment", verifyToken, requestAppointment);
router.get("/appointments", verifyToken, getAppointments);

module.exports = router;
