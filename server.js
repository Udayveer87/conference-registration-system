const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// connect DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server running");
});

// routes
app.use("/api", require("./routes/api"));

// static frontend
app.use(express.static("public"));

// IMPORTANT: server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});