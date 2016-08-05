var express = require('express');
var path = require('path');
var app = express();

var processDate = require('./processDate.js');
var port = process.env.PORT || 3000;

// Serve static files from public folder
app.use('/', express.static(path.join(__dirname, 'public')));

// Respond to timestamp request via processDate module
app.get('/:dateOrTimestamp', function(req, res) {
  res.json(processDate(req.params.dateOrTimestamp));
});

app.listen(port, function(err, res) {
  if (err) {
    console.log('Error happened starting the server:', err);
  }
  else {
    console.log('Server started successfully');
  }
});