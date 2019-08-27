require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const { searchEvents } = require("./controller/mainPageCTRL")

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
  console.log('connection successful');
})

app.get('/api/search', searchEvents)

const port = SERVER_PORT ;
app.listen(port, () => console.log(`server up and running on ${port}`));