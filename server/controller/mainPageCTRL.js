const Event = require('../collections/events');

module.exports = {
    searchEvents: (req, res, next) => {
        const {city} = req.body
        Event.find({
            addresses:{
                $elemMatch:{
                    city: city
                }
            }}).then(events => {
            res.status(200).send(events)
        })
    }
}