var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: Integer,
  username: { type: String, required: true, index: {unique: true} }
  password: {type: String, required: true}
})

userSchema.comparePassword = function(attemptedPassword, savedPassword, callback) {
  bcrypt.compare(attemptedPassword, savedPassword, function(err, isMatch) {
    if (err) { callback(err); }
    callback(null, isMatch);
  });
}

userSchema.hashPassword = function(next) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
  }
});

var User = mongoose.model('User', userSchema);


module.exports = User;