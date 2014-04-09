
var defineModel = function(mongoose, modelName, defineSchema) {
  var modelArgs = [modelName];
  if (mongoose.modelNames().indexOf(modelName) < 0) {
    modelArgs.push(defineSchema(mongoose));
  }
  return mongoose.model.apply(mongoose, modelArgs);
};

var defineSchema = function(mongoose) {
  var schema = new mongoose.Schema({
    username: String,
    languages: Array,
  });

  return schema;
};

module.exports = function(options) {
  options = options || {};
  var mongoose = options.mongoose ? options.mongoose : require('mongoose');
  return defineModel(mongoose, 'User', defineSchema);
};

