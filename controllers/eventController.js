const { Event } = require("../models/events");



exports.getAllEvents = async function (req, res) {
  try {
      const { tag } = req.query;
      let query = {}; 

      if (tag) {
          query = { tags: tag };
      }

      const events = await Event.find(query);

      res.send(events);
  } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).send({ message: "Error fetching events." });
  }
};

exports.getSingleEvent = async function (req, res) {
  try {
    const eventId = req.params.eventid
    const singleEvent = await Event.findById(eventId)
    res.send(singleEvent)

  } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).send({ message: "Error fetching event." });
  }
}



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


