const bcrypt = require("bcryptjs");
const { Users } = require("../models/users")

const { v4: uuidv4 } = require("uuid");

// create user

exports.createUser = async function (req, res) {
// app.post("/signup", async (req, res) => {
    const newUser = req.body;
  
    try {
      // Hash the user's password before saving it
      const hashedPassword = await bcrypt.hash(newUser.password, 10);
      newUser.password = hashedPassword;
  
      const user = new Users(newUser);
      console.log("Created a user");
      await user.save();
      res.send({ message: "New User Created." });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send({ message: "Error creating user." });
    }
  };
  
  // auth with bcrypt
  // Authorization generation endpoint
  exports.authoriseUser = async function (req, res) {
//   app.post("/auth", async (req, res) => {
    console.log("arrived");
    console.log(req.body);
    const { username, password } = req.body;
  
    try {
      // Find the user by username
      const user = await Users.findOne({ username });
  
      if (!user) {
        return res.sendStatus(403); // User not found
      }
  
      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        console.log("wrong password");
        return res.sendStatus(403);
      }
  
      // Generate token
      user.token = uuidv4();
      await user.save();
      res.send({ token: user.token, username: user.username, password: user.password, rating: user.rating, profilePic: user.profilePic, bio: user.bio });
    } catch (error) {
      console.error("Error authenticating user:", error);
      res.status(500).send({ message: "Error authenticating user." });
    }
  };
  
 
  
 