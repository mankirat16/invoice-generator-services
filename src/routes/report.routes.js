const express = require("express");
const { getUserReports, makeUserReport, deleteReport, updateReport, findReportById } = require("../controllers/report.controller");

const router = express.Router();

router.get("/:id", getUserReports);
router.get("/:id/view", findReportById);
router.post("/:id", makeUserReport);
router.delete("/:id", deleteReport);
router.put("/:id", updateReport);

module.exports = router;
