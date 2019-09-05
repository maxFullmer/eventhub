const User = require('../collections/users');
const Event = require('../collections/events');
const mongoose = require('mongoose');
const Geocodio = require('geocodio');
const { GEOCODIO_API_KEY } = process.env;

const geoConfig = {
    api_key: GEOCODIO_API_KEY
}
const geocodio = new Geocodio(geoConfig);

module.exports = {
  getUserEvents: async (req, res, next) => {
    const { userEvents } = req.body;
    let eventInfo = [];

    for (let i = 0; i < userEvents.length; i++) {
      eventInfo.push(
           await Event.find({_id: userEvents[i]}).limit(1).then(([event]) => {
            return event
          })
        )
    }

    res.status(200).send(eventInfo)
  },

  postEvent: (req, res, next) => {
    const { formatted_address, city, description, eventName, eventDate, user_id } = req.body;

    geocodio.get('geocode', {q: formatted_address}, function(err, response){
      if (err) throw err;
  
      const resStrToJSON = JSON.parse(response);
      const location = resStrToJSON.results[0].location;

      const event = new Event({
        eventName: eventName,
        eventDate: new Date(eventDate),
        description: description,
        address: formatted_address,
        city: city,
        lat: location.lat,
        lng: location.lng,
        rsvpCount: 0,
        category: ""
      });

      event.save((err) => {
          if (err) throw err;
          
          let event_id = event._id;

          User.findOne({_id: mongoose.Types.ObjectId(user_id)}).then((foundUser) => {
            foundUser.userEvents.push(event_id);
            foundUser.save((err) => {
              if (err) throw err;
            })
          })           
        })
    
      res.sendStatus(200);
    });
  },

  cancelEvent: (req, res, next) => {
    const { event_id, user_id } = req.body;


    User.findOne({_id: mongoose.Types.ObjectId(user_id)}).then((foundUser) => {
      let event_index = foundUser.userEvents.indexOf(mongoose.Types.ObjectId(event_id));
      foundUser.userEvents.splice(event_index, 1);
      foundUser.save((err) => {
        if (err) throw err;
      })
    });
         
    try {
      console.log(Event.deleteOne({_id: mongoose.Types.ObjectId(event_id)}))
      Event.deleteOne({_id: mongoose.Types.ObjectId(event_id)});
    } catch (err) {
      console.log(err)
    }
    

    res.sendStatus(200)
  }

  // editEvent: (req, res, next) => {
  //   const { formatted_address, city, description, event_name, eventDate, event_id } = req.body;

  //   geocodio.get('geocode', {q: formatted_address}, function(err, response) {
  //     if (err) throw err;
  
  //     const resStrToJSON = JSON.parse(response);
  //     const location = resStrToJSON.results[0].location;

  //     Event.findOneAndUpdate({_id: event_id}, {
  //       eventName: event_name,
  //       eventDate: eventDate,
  //       description: description,
  //       address: formatted_address,
  //       city: city,
  //       lat: location.lat,
  //       lng: location.lng,
  //       rsvpCount: 0,
  //       category: ""
  //     });
      
  //     res.status(200).send()
  //   });
  // }
}