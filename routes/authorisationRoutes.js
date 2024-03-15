const express = require ("express")
const router = express.Router()

const { createUser, authoriseUser } = require("../controllers/authController");
const { authUser } = require("../middleware/middleware");



router.post("/signup", createUser)
router.post("/authorisation", authoriseUser)




module.exports = router; 