var socket;
var username = window.prompt('Enter a username:', '');

function setup() {
  socket = io();

  socket.on('chat', function(message, author) {
    var format = 'i';
    if(author == username) format = 'b';
    document.getElementById('chatContent').innerHTML += '<p><' + format + '>' + author + '</' + format + '> | ' + message + '</p>';
  });
}

function send() {
  socket.emit('chat', document.getElementById('messageInput').value, username);
  document.getElementById('messageInput').value = '';
}
