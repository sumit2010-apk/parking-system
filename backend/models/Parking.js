const mongoose = require('mongoose');
const parkingSchema = new mongoose.Schema({
    vehicleNumber: String,
    entryTime: Date,
    exitTime: Date,
    totalAmount: Number,
    status:{type: String, default:"active"}
});
module.exports = mongoose.model('Parking', parkingSchema);  