const { Event } = require("../models/events");

exports.addParticipant = async function (req, res) {
    const id = req.params.id
 
    try {

    await Event.updateOne(
        { _id: id },
        { $push: {dates: req.body} },
        res.send('Success')
    )
    } catch (e) {
        console.log(e)
    }
}