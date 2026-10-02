const express = require("express");
const router = express.Router();

const Attendee = require("../models/Attendee");
const Session = require("../models/Session");
const Registration = require("../models/Registration");


// Add Attendee (insertOne)
router.post("/add-attendee", async (req, res) => {
  const data = await Attendee.create(req.body);
  res.json(data);
});


// Add Sample Sessions (insertMany)
router.post("/add-sessions", async (req, res) => {
  const sessions = await Session.insertMany([
    { title: "AI Basics", speaker: "John", duration: 2, capacity: 100 },
    { title: "ML Advanced", speaker: "Sara", duration: 3, capacity: 80 },
    { title: "Web Dev", speaker: "Mike", duration: 2, capacity: 120 },
    { title: "Cloud", speaker: "Anna", duration: 1, capacity: 60 }
  ]);
  res.json(sessions);
});


// Register (insertOne)
router.post("/register", async (req, res) => {
  const reg = await Registration.create(req.body);
  res.json(reg);
});


// View Registrations (find + populate)
router.get("/registrations", async (req, res) => {
  const data = await Registration.find()
    .populate("attendeeId")
    .populate("sessionId");
  res.json(data);
});


// Pagination + sort + limit + skip
router.get("/sessions", async (req, res) => {
  const { page = 1 } = req.query;
  const data = await Session.find()
    .limit(2)
    .skip((page - 1) * 2)
    .sort({ duration: -1 });
  res.json(data);
});


// Projection
router.get("/attendees", async (req, res) => {
  const data = await Attendee.find({}, { name: 1, email: 1 });
  res.json(data);
});


// Count
router.get("/count", async (req, res) => {
  const count = await Attendee.countDocuments();
  res.json({ count });
});


// $and $or
router.get("/filter", async (req, res) => {
  const data = await Session.find({
    $or: [
      { duration: { $gt: 2 } },
      { capacity: { $lt: 100 } }
    ]
  });
  res.json(data);
});


// Aggregation 1
router.get("/agg1", async (req, res) => {
  const data = await Registration.aggregate([
    { $group: { _id: "$sessionId", total: { $sum: 1 } } }
  ]);
  res.json(data);
});


// Aggregation 2
router.get("/agg2", async (req, res) => {
  const data = await Registration.aggregate([
    { $group: { _id: "$sessionId", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 1 }
  ]);
  res.json(data);
});


// Delete
router.delete("/delete/:id", async (req, res) => {
  await Registration.deleteOne({ _id: req.params.id });
  res.json({ msg: "Deleted" });
});

module.exports = router;