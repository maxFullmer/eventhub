const Event = require('../collections/events');

module.exports = {
    searchEvents: (req, res, next) => {
        const {city, dateBegin, dateEnd} = req.body
        console.log(dateBegin, dateEnd)
        Event.find( {$and: [
            {eventDate: {$gte: dateBegin}},
            {eventDate: {$lte: dateEnd}},
            {address : 
                {city: city}
            }
        ]}).then(events => {
            res.status(200).send(events)
        })
    }
}

