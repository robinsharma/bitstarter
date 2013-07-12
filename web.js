var express = require('express');
var buffer = new Buffer(256);
var fs = require('fs');

buffer = fs.readfile('index.html');
buffer.toString();
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
