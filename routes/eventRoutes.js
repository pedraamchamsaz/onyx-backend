const express = require ("express")
const router = express.Router()
const {getAllEvents, createEvent} = require ("../controllers/eventController");
const { addParticipant } = require("../controllers/bookingController");


router.get ("/", getAllEvents); 
router.post ("/postevent", createEvent);
router.post('/events/:eventid/:dateindex/booking', addParticipant)


module.exports = router; 