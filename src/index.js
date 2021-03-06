const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

//db connection

mongoose.connect('mongodb://localhost:27017/chat-databse')
  .then(db => console.log('db ok'))
  .catch(err => console.log('db err'))

//Settings
app.set('port', process.env.PORT || 3000);

require('./sockets')(io);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
server.listen(3000, () =>{
  console.log('server on port',app.get('port'));
})
