//server js
var express = require('express');
var mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 3000;

//establish our connection to the mongo database
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/buzzfeed')

app.get('/', function(req, res) {
  res.json('Hello World!');
})

require('./routes.js')(app);

app.listen(port);
console.log('Server is running on localhost:' + port);