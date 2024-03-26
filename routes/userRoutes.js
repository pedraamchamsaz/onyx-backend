const express = require ("express");
const { authUser } = require("../middleware/middleware");
const { addUserInfo, fetchUserInfo, getUserEventInfo } = require("../controllers/profilePageController")

const router = express.Router()

router.get("/event/:id/creator", getUserEventInfo)

router.put("/putUserInfo", addUserInfo, authUser); 
router.get("/fetchUserInfo", fetchUserInfo, authUser)











module.exports = router; 