const router = require("express").Router();
const { getPendingStudents, changeStatus } = require("../controllers/adminController");
const { verifyToken, verifyAdmin } = require("../middleware/auth");

router.get("/pending-students", verifyToken,verifyAdmin, getPendingStudents);
router.put("/student/:id/status", verifyToken,verifyAdmin, changeStatus);

module.exports = router;
