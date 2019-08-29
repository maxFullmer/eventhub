const Geocodio = require('geocodio');
const { GEOCODIO_API_KEY } = process.env;

const geoConfig = {
    api_key: GEOCODIO_API_KEY
}
const geocodio = new Geocodio(geoConfig);

module.exports = {
    eventPost: (req, res, next) => {
        const { streetAddress, city, state, zip } = req.body;
        const address = `${streetAddress}, ${city}, ${state} ${zip}`;
      
        geocodio.get('geocode', {q: address}, function(err, response){
          if (err) throw err;
      
          const resStrToJSON = JSON.parse(response);
          const location = resStrToJSON.results[0].location;
          // write MongoDB post-event method that adds the req.body address info and the lat-lng location 
          res.status(200).send(location);
          // res.status(200).send('do we need to send anything back??? maybe the array of event ids for the user?')
        });
        // res.status(200).send('do we need to send anything back??? maybe the array of event ids for the user?')
      }
}