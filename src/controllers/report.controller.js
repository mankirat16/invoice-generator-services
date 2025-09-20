const reportService = require("../services/report.service");

exports.getUserReports = async (req, res, next) => {
  try {
    const { reports } = await reportService.getUserReports(req, res);
    return res.status(200).json({ message: "Fetched user reports successfully", reports });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.makeUserReport = async (req, res, next) => {
  try {
    const { userReport } = await reportService.makeUserReport(req, res);
    return res.status(201).json({ message: "User report saved successfully", report: userReport });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.updateReport = async (req, res, next) => {
  try {
    const { report } = await reportService.updateReport(req, res);
    return res.status(201).json({ message: "User report updated successfully", report });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.deleteReport = async (req, res, next) => {
  try {
    await reportService.deleteReport(req, res);
    return res.status(201).json({ message: "User report deleted successfully" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.findReportById = async (req,res,next) => {
  try {
    const report = await reportService.findReportById(req, res);
    return res.status(200).json(report);
  } catch (err) {
    console.log(err);
    return res.status(400).json([err.message]);
  }
};
