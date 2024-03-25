const express = require ("express");
const { authUser } = require("../middleware/middleware");
const { addUserInfo } = require("../controllers/profilePageController")

const router = express.Router()


router.put("/putUserInfo", addUserInfo, authUser); 










module.exports = router; 