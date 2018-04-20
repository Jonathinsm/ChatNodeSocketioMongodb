let nicknames = [
  'pepe'
  'ñolo'
  'lola'
];

module.exports = function (io) {

  io.on('connection', socket => {
    console.log('Nuevo usuario conectado');

    socket.on('new user', (data, cb) => {

    })

    socket.on('send message', function (data) {
      io.sockets.emit('new message', data);
    });
  });
};
