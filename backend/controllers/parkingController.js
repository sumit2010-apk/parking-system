const Parking = require("../models/Parking");
const Payment = require("../models/Payment");

exports.entry = async (req, res) => {
    const record = new Parking({
        vehicleNumber: req.body.vehicleNumber,
        entryTime: new Date()
    });
    await record.save();
    res.json(record);
};
exports.exit = async (req, res) => {
    const record = await Parking.findOne({
        vehicleNumber: req.body.vehicleNumber,
        status: "active"
    });
     const exitTime = new Date();
     const hours = Math.ceil((exitTime - record.entryTime)/(1000*60*60));
     const amount = hours * 50;
     record.exitTime = exitTime;
        record.totalAmount = amount;
        record.status = "completed";
        await record.save();
        res.json({ hours, amount });
};
exports.payMonthly = async (req, res)=>{
    const payment = new Payment({
        vehicleNumber: req.body.vehicleNumber,
        month: "March",
        year: 2026,
        amount:500,
        paid: true,
        paymentDate: new Date()
    });
    await payment.save();
    res.json(payment);
    };
    const axios = require("axios");

exports.aiReport = async (req, res) => {
  const data = await Parking.find({ status: "completed" });

  const response = await axios.post("http://127.0.0.1:8000/analyze", data);

  res.json(response.data);
};
exports.slotSummary = async (req, res) => {
  try {
    const occupied = await Parking.countDocuments({
      status: "active"
    });

    const total = 10;
    const free = total - occupied;

    res.json({
      total,
      occupied,
      free
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
exports.revenueSummary = async (req, res) => {
  try {
    const completed = await Parking.find({
      status: "completed"
    });

    const totalRevenue = completed.reduce(
      (sum, item) => sum + (item.totalAmount || 0),
      0
    );

    res.json({
      totalRevenue,
      totalVehicles: completed.length
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
exports.predictOccupancy = async (req, res) => {
  try {
    const occupied = await Parking.countDocuments({
      status: "active"
    });

    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      { occupied }
    );

    res.json(response.data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
