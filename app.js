require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
const cors = require("cors");
const eventRouter = require("./routes/eventRoutes.js");
const authorisationRouter = require("./routes/authorisationRoutes.js")

const bcrypt = require("bcryptjs");
const { Users } = require("./models/users")
const { v4: uuidv4 } = require("uuid");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err.message);
  });


app.use(cors());
app.use(express.json());

app.use("/event", eventRouter);
app.use("/auth", authorisationRouter)



// // create user
// app.post("/signup", async (req, res) => {
//   const newUser = req.body;

//   try {
//     // Hash the user's password before saving it
//     const hashedPassword = await bcrypt.hash(newUser.password, 10);
//     newUser.password = hashedPassword;

//     const user = new Users(newUser);
//     console.log("Created a user");
//     await user.save();
//     res.send({ message: "New User Created." });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).send({ message: "Error creating user." });
//   }
// });

// // auth with bcrypt
// // Authorization generation endpoint
// app.post("/auth", async (req, res) => {
//   console.log("arrived");
//   console.log(req.body);
//   const { username, password } = req.body;

//   try {
//     // Find the user by username
//     const user = await Users.findOne({ username });

//     if (!user) {
//       return res.sendStatus(403); // User not found
//     }

//     // Compare the provided password with the hashed password stored in the database
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       console.log("wrong password");
//       return res.sendStatus(403);
//     }

//     // Generate token
//     user.token = uuidv4();
//     await user.save();
//     res.send({ token: user.token });
//   } catch (error) {
//     console.error("Error authenticating user:", error);
//     res.status(500).send({ message: "Error authenticating user." });
//   }
// });


// // Authorization middleware
// app.use(async (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const user = await Users.findOne({ token: authHeader });
//   if (user) {
//     next();
//   } else {
//     return res.sendStatus(403);
//   }
// });
























app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


module.exports = app;

module.exports = Event;