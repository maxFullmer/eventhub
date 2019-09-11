require("dotenv").config();
const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require("mongoose")
const { searchEvents, getCityLatLng } = require("./controller/mainPageCTRL");
const { postEvent, getUserEvents, cancelEvent } = require('./controller/eventCTRL');
const { register, login, logout, userSession } = require('./controller/authCtrl')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static( `${__dirname}/../build` ) );

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
  console.log('connection successful');
});

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 3600 * 24 * 14 // a fortnight (aka 2 weeks)
  }
}));

// Authorization
app.post('/api/register', register);
app.post('/api/login', login);
app.get('/api/logout', logout);
app.get('/api/user_session', userSession);

// MAP PAGE/VIEW
app.post('/api/search', searchEvents);
app.post('/api/get-city-loc', getCityLatLng);

// USER PAGE/VIEW
app.post('/api/get-my-events', getUserEvents);
app.post('/api/post-event', postEvent);
app.post('/api/cancel-event', cancelEvent);

// AUTO DELETE EXPIRED EVENTS
const deleteInterval = (1000 * 60 * 60 * 24); // daily
setInterval(() => {
  // get currentDate
  // Use Mongo methods to delete events that are before the current Date
}, deleteInterval)

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(SERVER_PORT, () => console.log(`server up and running on ${SERVER_PORT}`));