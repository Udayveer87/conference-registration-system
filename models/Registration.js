const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  attendeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Attendee" },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
  status: String,
  payment: {
    amount: Number,
    status: String
  }
});

module.exports = mongoose.model("Registration", registrationSchema);