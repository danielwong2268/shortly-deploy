mongoURI = 'mongodb://localhost/shortlydb';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connection established')
});









module.exports = db;
