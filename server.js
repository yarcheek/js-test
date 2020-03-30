
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client.html');
});

app.get('/client.js', (req, res) => {
    res.sendFile(__dirname + '/client.js');
});

server.listen('4444', () => {
  console.log('listening for requests...');
});

io.on('connection', (socket) => {
  socket.on('chat', (username, message) => {
    console.log('message received, sent by: ' + username + ', content: ' + message);
    io.emit('chat', username, message);
  });
});
