 const { Users } = require("../models/users");

 
 // Authorization middleware
 exports.authUser = async function (req, res, next) {
//  app.use(async (req, res, next) => {
    const authHeader = req.headers["Authorization"];
    const user = await Users.findOne({ token: authHeader });
    console.log("Auth header check", authHeader)
    if (user) {
      next();
    } else {
      return res.sendStatus(403);
    }
  };