const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username : String,
  password : String,
  name : String,
  email : String,
  bio : String,
  profilePic : String,
  token : String,
  rating: Number,
})

module.exports.Users = mongoose.model('Users', userSchema)