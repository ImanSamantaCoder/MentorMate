const router = require("express").Router();
const { getPendingStudents, changeStatus } = require("../controllers/adminController");

router.get("/pending-students", getPendingStudents);
router.put("/student/:id/status", changeStatus);

module.exports = router;
