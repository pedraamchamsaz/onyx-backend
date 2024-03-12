const mongoose = require("mongoose");

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
  dates: [
    {
      date1: Date,
      time1: String,
      spaces1: Number,
      booked1:  [{
        firstname: String,
        secondname: String,
        email: String,
        phone: Number,
        address: String,
        city: String,
        postcode: String,

      }],
    },
    {
      date2: Date,
      time2: String,
      spaces2: Number,
      booked2: [{
        firstname: String,
        secondname: String,
        email: String,
        phone: Number,
        address: String,
        city: String,
        postcode: String,

      }],
    },
    {
      date3: Date,
      time3: String,
      spaces3: Number,
      booked3:  [{
        firstname: String,
        secondname: String,
        email: String,
        phone: Number,
        address: String,
        city: String,
        postcode: String,

      }],
    },
  ],
  // assigns each event to the specific user
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports.Event = mongoose.model("Event", event);

