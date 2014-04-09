var express = require('express');
require('express-resource');

module.exports = function(users) {
  users = users || require('./controllers/users');

  var routes = express();

  routes.use(express.json());
  routes.use(express.urlencoded());

  routes.resource('users', users);

  return routes;
};
