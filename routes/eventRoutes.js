const express = require ("express")
const router = express.Router()
const {getAllEvents, createEvent} = require ("../controllers/eventController")


router.get ("/events", getAllEvents);
router.post ("/postevent", createEvent);


module.exports = router; 