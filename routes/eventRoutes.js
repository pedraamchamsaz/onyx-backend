const express = require ("express")
const router = express.Router()
const {getAllEvents, createEvent} = require ("../controllers/eventController");
const { createUser } = require("../controllers/authController");


router.get ("/events", getAllEvents);
router.post ("/postevent", createEvent);
router.post("/signup", createUser)


module.exports = router; 