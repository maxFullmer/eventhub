const Geocodio = require('geocodio');
const { GEOCODIO_API_KEY } = process.env;

const geoConfig = {
    api_key: GEOCODIO_API_KEY
}
const geocodio = new Geocodio(geoConfig);

module.exports = {
    eventPost: (req, res, next) => {
        const { formatted_address, city } = req.body;
      
        //send city to 
        console.log(city)
        geocodio.get('geocode', {q: formatted_address}, function(err, response){
          if (err) throw err;
      
          const resStrToJSON = JSON.parse(response);
          const location = resStrToJSON.results[0].location;
          // write MongoDB post-event method that adds the req.body formatted_address and city along with the lat-lng location 
          res.status(200).send(location);
          // res.status(200).send('do we need to send anything back??? maybe the array of event ids for the user?')
        });
        // res.status(200).send('do we need to send anything back??? maybe the array of event ids for the user?')
      }
}