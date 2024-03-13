const { Event } = require("../models/events");



exports.getAllEvents = async function (req, res) {
    try {
      // Find all events
      const allEvents = await Event.find();
  
      res.send(allEvents);
    } catch (error) {
      console.error("Error fetching all events:", error);
      res.status(500).send({ message: "Error fetching all events." });
    }
};



exports.createEvent = async function (req, res) {
   try { 
    const newEvent = req.body;
  
    // // Retrieve the user's token from the authorization header
    // const authHeader = req.headers["authorization"];
  
    
    //   // Find the user based on the token
    //   const user = await User.findOne({ token: authHeader });
  
    //   // Check if the user exists
    //   if (!user) {
    //     return res.sendStatus(403); // Forbidden if user not found
    //   }
  
     
      // Create a new event document and associate it with the user
      const event = new Event({
        ...newEvent,
        // createdBy: user._id, // Assign the user's ID to the createdBy field
      });
  
      // Save the event
      await event.save();
  
      res.send({ message: "New event inserted." });
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).send({ message: "Error creating event.", error });
    }
  };


