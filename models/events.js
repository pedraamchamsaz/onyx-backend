const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  eventName : String,
  eventImg : String,
  hostName : String,
  ratings : Array,
  price : Number,
  dates : Array,
  hostBio : String,
  hostProfilePic : String,
  hostProfileLink : String,
  tags : Array,

  // assigns each event to the specific user
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
})

module.exports.Events = mongoose.model('Events', eventSchema)