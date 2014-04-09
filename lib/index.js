var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');

// 0 is disconnected
if (mongoose.connection.readyState === 0) {
  mongoose.connect('mongodb://localhost:27017/mydb');
}

var app = express();

app.use(routes());

module.exports = app;
