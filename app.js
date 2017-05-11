var PORT = 2319;
var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

app.get('/', function(req, res) { res.send('Hello world!'); });

// var server = app.listen(PORT);

var options = {
    debug: true
  };

//app.use('/api', ExpressPeerServer(server, options));
// // OR

var server = require('http').createServer(app);

app.use('/public', ExpressPeerServer(server, options));

server.on('connection', function(id) {
    console.log(id);
  });
  

server.on('disconnect', function(id) {
    console.log(id);
  });

//server.listen(PORT);

console.log('listening on: ' + process.env.IP +':'+process.env.PORT);
server.listen(process.env.PORT);
