const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String
});

module.exports = mongoose.model("Attendee", attendeeSchema);