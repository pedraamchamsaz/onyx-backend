const mongoose = require("mongoose");

const bookedEventSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  firstname: String,
  secondname: String,
  email: String,
  phone: Number,
  address: String,
  city: String,
  postcode: String,
});

const dateEventSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  date: [Date],
  starttime: [String],
  endtime: [String],
  spaces: [Number],
  booked: [bookedEventSchema],
});


const event = new mongoose.Schema({
  eventName: String,
  eventImg: String,
  hostName: String,
  ratings: Number,
  price: Number,
  hostBio: String,
  hostProfilePic: String,
  hostProfileLink: String,
  tags: [String],
  description: String,
  dates: [dateEventSchema],
  // assigns each event to the specific user
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports.Event = mongoose.model("Event", event);
