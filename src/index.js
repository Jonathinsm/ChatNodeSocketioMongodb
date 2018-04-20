const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

//Settings
app.set('port', process.env.PORT || 3000);

require('./sockets')(io);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
server.listen(3000, () =>{
  console.log('server on port',app.get('port'));
})
