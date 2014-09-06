var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/game.html');
}).configure(function() {
    app.use('/assets', express.static(__dirname + '/assets'));
    app.use('/lib', express.static(__dirname + '/lib'));
    app.use('/bower_components', express.static(__dirname + '/bower_components'));
}).listen(port, function() {
  console.log("Listening on " + port);
});
