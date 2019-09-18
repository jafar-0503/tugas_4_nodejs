//filename: index.js

//import express
let express = require('express');

//import body-parser
let bodyParser = require('body-parser');

//import mongoose
let mongoose = require('mongoose');

//initialize app
let app = express();

//import routes
let apiRoutes = require("./api-routes");

//configuration badyparser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/tugasCRUD');

var db = mongoose.connection;

//setup server port 8080
var port = process.env.PORT || 8080;

//send message for default URL
app.get('/', (req, res) => res.send('<h1><center>Welcome to Jungle....</center></h1>'));

//app apiRoutes
app.use('/DataSiswa', apiRoutes);

//launch app to listen specifield port
app.listen(port, function(){
  console.log("Running on Port " + port);
})
