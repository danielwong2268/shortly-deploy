var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
  id: Integer,
  baseUrl, String,
  code, String,
  title: String,
  visits, String
})

urls.pre('save', function(next) {
  this.url = hash(url);
  next();
}

var hash = function(url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5));
} 

var Link = new mongoose.model('Link', linkSchema);





module.exports = Link;

