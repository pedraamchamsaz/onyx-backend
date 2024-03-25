const mongoose = require("mongoose");

const bookedEventSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  postcode: String,
});


// const dateEventSchema = new mongoose.Schema({
//   // _id: mongoose.Schema.Types.ObjectId,
//   date: Date,
//   starttime: String,
//   endtime: String,
//   spaces: Number,
//   booked: [bookedEventSchema],
// });


  // _id: mongoose.Schema.Types.ObjectId,
  // date: Date,
  // starttime: String,
  // endtime: String,
  // spaces: Number,

//   booked: [bookedEventSchema],
});


const event = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
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
  date: String,
  starttime: String,
  endtime: String,
  spaces: Number,
  booked: [bookedEventSchema],
  // assigns each event to the specific user
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports.Event = mongoose.model("Event", event);
module.exports.Booked = mongoose.model("Booked", bookedEventSchema);
