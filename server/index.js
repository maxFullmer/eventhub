require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const { searchEvents, getCityLatLng } = require("./controller/mainPageCTRL");
const { eventPost } = require('./controller/eventPostCTRL');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
  console.log('connection successful');
})

app.post('/api/search', searchEvents)

app.post('/api/get-city-loc', getCityLatLng)

// Request to Geocodio to get lat and long from address
// should probably combine this with the post-new-event endpoint
app.post('/api/post-event', eventPost)


app.listen(SERVER_PORT, () => console.log(`server up and running on ${SERVER_PORT}`));