const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  title: String,
  speaker: String,
  duration: Number,
  capacity: Number
});

module.exports = mongoose.model("Session", sessionSchema);