const express = require("express");
const router = express.Router();
const parkingController = require("../controllers/parkingController");

router.post("/entry", parkingController.entry);
router.post("/exit", parkingController.exit);
router.post("/payMonthly", parkingController.payMonthly);
router.get("/ai-report", parkingController.aiReport); // ✅ ADD THIS
router.get("/slot-summary", parkingController.slotSummary);
router.get("/revenue-summary", parkingController.revenueSummary);
router.get("/predict", parkingController.predictOccupancy);
module.exports = router;