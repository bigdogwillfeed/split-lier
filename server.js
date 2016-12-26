// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var fs = require('fs');
var chapters = require("./chapters");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// make sure the chapters are in good shape
app.use("*", function (request, response, next) {
  if (chapters.__isValid) {
    next();
  } else {
    // TODO: it might be more useful to display the validation errors here instead of the logs?
    response.status(500).send('ERROR: Your chapter definition needs some work, check the logs for details');
  }
});

// adventure is a Single Page App, served at the root
app.get("/", function (request, response, next) {
  response.sendFile(__dirname + '/views/index.html', 'utf8');
});

// make sure people can spread the news
app.get("/instructions", function (request, response) {
  response.sendFile(__dirname + '/views/instructions.html', 'utf8');
});

// each chapter is served individually, as needed
app.get("/chapter/:passphrase", function (request, response) {
  var passphrase = decodeURIComponent(request.params.passphrase);
  var chapter = chapters[passphrase];
  if (chapter) {
    response.send(chapter);
  } else {
    response.sendStatus(404);
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});