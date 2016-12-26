// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var fs = require('fs')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html', 'utf8');
});

app.get("/instructions", function (request, response) {
  response.sendFile(__dirname + '/views/instructions.html', 'utf8');
});

app.get("/chapters", function (request, response) {
  var chapters = JSON.parse(fs.readFileSync("/app/chapters.json"));
  response.send(chapters);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});