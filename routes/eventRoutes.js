const express = require ("express")
const router = express.Router()
const {getAllEvents, createEvent} = require ("../controllers/eventController");
const { addParticipant } = require("../controllers/bookingController");


router.get ("/", getAllEvents); // /events
router.post ("/postevent", createEvent); // /events/postevent
router.post('/:eventid/:dateindex', addParticipant)


module.exports = router; 