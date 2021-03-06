const Event = require('../collections/events');
const Geocodio = require('geocodio');
const { GEOCODIO_API_KEY } = process.env;

const geoConfig = {
    api_key: GEOCODIO_API_KEY
}
const geocodio = new Geocodio(geoConfig);

module.exports = {
    searchEvents: (req, res) => {
        const {city, eventDate} = req.body
        console.log(city, eventDate)
        Event.find( {$and:[
            {eventDate: eventDate},
            {city: city}
        ]}
        ).then(events => {
            res.status(200).send(events)
        }).catch(err => console.log(err))
    },

    getCityLatLng: (req, res) => {
        const { city } = req.body;
        geocodio.get('geocode', {q: city}, function(err, response){
            if (err) throw err;
        
            const resStrToJSON = JSON.parse(response);
            const latLng = resStrToJSON.results[0].location;
            res.status(200).send(latLng);
        })
    }
}

