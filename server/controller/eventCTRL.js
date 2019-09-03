const Geocodio = require('geocodio');
const { GEOCODIO_API_KEY } = process.env;

const geoConfig = {
    api_key: GEOCODIO_API_KEY
}
const geocodio = new Geocodio(geoConfig);

module.exports = {
    getUserEvents: (req, res, next) => {
      const { user_id } = req.params;

      Event.findById(user_id).then(userEventIds => {
        res.status(200).send(userEventIds)
      })
    },

    postEvent: (req, res, next) => {
      const { formatted_address, city, description, event_name, eventDate } = req.body;
      const { user_id } = req.params;

      geocodio.get('geocode', {q: formatted_address}, function(err, response){
        if (err) throw err;
    
        const resStrToJSON = JSON.parse(response);
        const location = resStrToJSON.results[0].location;

        const event = new Event({
          eventName: event_name,
          eventDate: eventDate,
          description: description,
          address: formatted_address,
          city: city,
          lat: location.lat,
          lng: location.lng,
          rsvpCount: 0,
          category: ""
        })
        
        event.save((err) => {
          Event.findById(user_id).then(userEventIds => {
            res.status(200).send(userEventIds);
          })
        });
        
      });
    },

    editEvent: (req, res, next) => {
    //   const { user_id } = req.params;

    //   Event.findById(user_id).then(userEventIds => {
    //     res.status(200).send(userEventIds)
    //   })
    }
}