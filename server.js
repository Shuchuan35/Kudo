const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = require('./config/keys');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//connect to production mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/kudoApp', {useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/kudoApp', { useNewUrlParser: true });

require('./routes/api-routes')(app);

if (process.env.NODE_ENV === "production") {
  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/client/build/index.html');
  });
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});