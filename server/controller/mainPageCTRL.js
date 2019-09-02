const Event = require('../collections/events');
const Geocodio = require('geocodio');
const { GEOCODIO_API_KEY } = process.env;

const geoConfig = {
    api_key: GEOCODIO_API_KEY
}
const geocodio = new Geocodio(geoConfig);

module.exports = {
    searchEvents: (req, res, next) => {
        const {city, dateBegin, dateEnd} = req.body
        Event.find( {$and: [
            {eventDate: {$gte: dateBegin}},
            {eventDate: {$lte: dateEnd}}
            // {address : 
            //     {city: city}
            // }
        ]}).then(events => {
            res.status(200).send(events)
        }).catch(err => console.log(err))
    },

    getCityLatLng: (req, res, next) => {
        const { city } = req.body;
        geocodio.get('geocode', {q: city}, function(err, response){
            if (err) throw err;
        
            const resStrToJSON = JSON.parse(response);
            const latLng = resStrToJSON.results[0].location;
            console.log(latLng)
            res.status(200).send(latLng);
        })
    }
}

