const express = require ("express")
const router = express.Router()

const {getAllEvents, createEvent, getSingleEvent, getUserEvents, updateUserEvents, deleteUserEvents} = require ("../controllers/eventController");
const { addParticipant } = require("../controllers/bookingController");
const { createUser } = require("../controllers/authController");
const { authUser } = require("../middleware/middleware");

router.get("/", getAllEvents); // /events
router.get("/userEvents", getUserEvents, authUser);
router.get("/:eventid", getSingleEvent) // /events/1234567
router.post("/postevent", createEvent, authUser); // /events/postevent
router.post('/:eventid/:dateindex', addParticipant) // /events/1234567/0
router.post("/signup", createUser);
router.put("/:id", updateUserEvents, authUser);  // to update event
router.delete("/:id", deleteUserEvents, authUser);






module.exports = router; 