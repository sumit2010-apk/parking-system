const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
    vehicleNumber: String,
    month: String,
    year: Number,
    amount: Number,
    paid: Boolean,
    paymentDate: Date
});
module.exports = mongoose.model("Payment", paymentSchema);