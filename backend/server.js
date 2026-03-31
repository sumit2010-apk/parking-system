const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes/parkingRoutes");

const app = express();

// ✅ Allow frontend requests
app.use(cors());

// ✅ Parse JSON body
app.use(express.json());

// ✅ Connect MongoDB
connectDB();

// ✅ Routes
app.use("/api", routes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});