require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, GOOGLE_MAPS_API_KEY } = process.env;

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
  console.log('connection successful');
})

//use the google maps api key to get geocode lat and lng?
// app.get('/api/mapme', (req, res) => {
  
// }

const port = SERVER_PORT ;
app.listen(port, () => console.log(`server up and running on ${port}`));