const express = require ("express");
const { authUser } = require("../middleware/middleware");
const { addUserInfo, fetchUserInfo } = require("../controllers/profilePageController")

const router = express.Router()


router.put("/putUserInfo", addUserInfo, authUser); 
router.get("/fetchUserInfo", fetchUserInfo, authUser)










module.exports = router; 