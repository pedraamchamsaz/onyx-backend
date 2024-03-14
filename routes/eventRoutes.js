const express = require ("express")
const router = express.Router()
const {getAllEvents, createEvent} = require ("../controllers/eventController");
const { addParticipant } = require("../controllers/bookingController");


router.get ("/events", getAllEvents); // delete 'events' and change to '/'?
router.post ("/postevent", createEvent);
router.post('/events/:eventid/:dateindex/booking', addParticipant) // also delete 'events' here


module.exports = router; 