var User = require('../models/user')();

module.exports.index = function(req, res) {
  // FIXME
  User.find().exec().then(function(docs) {
    res.json(docs);
  });
};

module.exports.show = function(req, res) {
  // FIXME
  res.send(200);
};

module.exports.create = function(req, res) {
  // FIXME
  res.send(202);
};
