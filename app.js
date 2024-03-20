require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
const cors = require("cors");
const eventRouter = require("./routes/eventRoutes.js");

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

app.use("/events", eventRouter);







app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


module.exports = app;

module.exports = Event;