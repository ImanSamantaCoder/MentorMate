const router = require("express").Router();
const verifyToken = require("../middleware/auth");
const { getPendingAppointments, updateStatus } = require("../controllers/teacherController");

router.get("/appointments", verifyToken, getPendingAppointments);
router.put("/appointment/:id", verifyToken, updateStatus);

module.exports = router;
