const Report = require("../models/report.model");

exports.getUserReports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reports = await Report.find({ user: id });
    return { reports };
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

exports.makeUserReport = async (req, res, next) => {
  try {
    const { report, title } = req.body;
    const { id } = req.params;

    const userReport = await Report.insertOne({ data: report, user: id, title });
    return { userReport };
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

exports.updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const report = await Report.findById(id);
    if (!report) {
      throw new Error("Report not found");
    }
    report.data = data;
    await report.save();
    return { message: "Report updated successfully", report };
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    await Report.findByIdAndDelete(id);
    return { message: "User report deleted successfully" };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

exports.findReportById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Report id is required");
    }
    const report = await Report.findById(id);
    return { message: "Report found successfully", report };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
