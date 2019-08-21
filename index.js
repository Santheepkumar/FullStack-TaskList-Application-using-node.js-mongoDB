const port = 3000;
const express = require("express");
app = express();
const mongoose = require("mongoose");
const models = require('./models/index');
const bodyParser = require('body-parser');

//Requiring routes
var todoroutes = require('./routes/todoroutes');

//setting /api/todos

app.use('/api/todos', todoroutes)

//body-parser setup

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

//
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname +'/public'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});