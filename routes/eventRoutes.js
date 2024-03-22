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


module.exports = router; 