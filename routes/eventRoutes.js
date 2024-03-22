const express = require ("express")
const router = express.Router()

const {getAllEvents, createEvent, getSingleEvent} = require ("../controllers/eventController");
const { addParticipant } = require("../controllers/bookingController");
const { createUser } = require("../controllers/authController");

router.get("/", getAllEvents); // /events
router.get("/:eventid", getSingleEvent) // /events/1234567
router.post("/postevent", createEvent); // /events/postevent
router.post('/:eventid/:dateindex', addParticipant) // /events/1234567/0
router.post("/signup", createUser)


<<<<<<< HEAD
router.get ("/", getAllEvents); 
router.post ("/postevent", createEvent);
router.post('/events/:eventid/:dateindex/booking', addParticipant)
=======
>>>>>>> b92b7ca78484ea64b51f5d6cddf0f0fa1bbe5f06


module.exports = router; 