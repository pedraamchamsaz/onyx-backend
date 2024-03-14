const express = require ("express")
const router = express.Router()
const {getAllEvents, createEvent} = require ("../controllers/eventController");
const { addParticipant } = require("../controllers/bookingController");


router.get ("/events", getAllEvents);
router.post ("/postevent", createEvent);

// BOOKING

// router.post('/events/:id/booking', addParticipant)
router.post('/events/:id/booking', addParticipant)


module.exports = router; 