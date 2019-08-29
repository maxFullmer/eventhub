require("dotenv").config();
const express = require("express");
const app = express();
<<<<<<< HEAD
const mongoose = require("mongoose")
const { searchEvents } = require("./controller/mainPageCTRL")
=======
const mongoose = require("mongoose");
// const axios = require("axios");
const Geocodio = require('geocodio');
>>>>>>> 13ff802db386c17c9dd4f701838393056fd9c86f

const { SERVER_PORT, CONNECTION_STRING, GOOGLE_MAPS_API_KEY, GEOCODIO_API_KEY } = process.env;
const geoConfig = {
  api_key: GEOCODIO_API_KEY
}

app.use(express.json());
const geocodio = new Geocodio(geoConfig);

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
  console.log('connection successful');
})

<<<<<<< HEAD
app.post('/api/search', searchEvents)

const port = SERVER_PORT ;
=======
// Request to Geocodio to get lat and long from address
// should probably combine this with the post-new-event endpoint
app.post('/api/post-event', (req, res) => {
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
})

const port = SERVER_PORT;
>>>>>>> 13ff802db386c17c9dd4f701838393056fd9c86f
app.listen(port, () => console.log(`server up and running on ${port}`));