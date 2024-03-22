const { Event, Booked } = require("../models/events");

exports.addParticipant = async function (req, res) {
    const eventId = req.params.eventid
    // const dateId = req.params.dateindex

    try {
        const event = await Event.findById(eventId)

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        // const date = event.dates[dateId];

        // if (!date) {
        //     return res.status(404).json({ error: "Date event not found" });
        // }

        const newBooking = new Booked(req.body)

        event.booked.push(newBooking)

        await event.save()

        res.status(200).json({ message: "Booking added successfully", event: event });
        
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
        console.log(eventId, dateId);
    }
 
}