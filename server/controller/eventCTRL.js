const User = require('../collections/users');
const Event = require('../collections/events');
const Geocodio = require('geocodio');
const { GEOCODIO_API_KEY } = process.env;

const geoConfig = {
    api_key: GEOCODIO_API_KEY
}
const geocodio = new Geocodio(geoConfig);

module.exports = {
  getUserEvents: (req, res, next) => {
    const { userEvents } = req.params;

    let eventInfo = [];

    for (let i = 0; i < userEvents.length; i++) {
      eventInfo.push(
          Event.findOne({_id: userEvents[i]})
        )
    }
    res.status(200).send(eventInfo)
  },

  postEvent: (req, res, next) => {
    const { formatted_address, city, description, event_name, eventDate, user_id } = req.body;

    geocodio.get('geocode', {q: formatted_address}, function(err, response){
      if (err) throw err;
  
      const resStrToJSON = JSON.parse(response);
      const location = resStrToJSON.results[0].location;
      
      Event.insert({
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

      const event_id = Event.find({
        eventName: event_name,
        eventDate: eventDate,
        description: description,
        address: formatted_address,
        city: city,
        lat: location.lat,
        lng: location.lng,
        rsvpCount: 0,
        category: ""
      }, {_id: 1})
      
      // Goal: store the id from the event we just saved into the array of events in user
      User.findOneAndUpdate({_id: user_id}, {userEvents: [...this.userEvents, event_id]});
    
      res.status(200).send()
    });
  },

  editEvent: (req, res, next) => {
    const { formatted_address, city, description, event_name, eventDate, event_id } = req.body;

    geocodio.get('geocode', {q: formatted_address}, function(err, response) {
      if (err) throw err;
  
      const resStrToJSON = JSON.parse(response);
      const location = resStrToJSON.results[0].location;

      Event.findOneAndUpdate({_id: event_id}, {
        eventName: event_name,
        eventDate: eventDate,
        description: description,
        address: formatted_address,
        city: city,
        lat: location.lat,
        lng: location.lng,
        rsvpCount: 0,
        category: ""
      });
      
      res.status(200).send()
    });
  }
}