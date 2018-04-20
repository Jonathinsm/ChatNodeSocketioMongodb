$(function(){

  const socket = io();

  //Obtaining DOM elements from interface
  const $messageForm = $('#message-form');
  const $messageBox = $('#message');
  const $chat = $('#chat');

  //Obtaining DOM element from niknameForm

  const $nickForm = $('#nickForm');
  const $nickError = $('#nickError');
  const $nickname = $('#nickname');

  const $users = $('#usernames');

  $nickForm.submit(e => {
    e.preventDefault();
    socket.emit('new user', $nickname.val(), (data) => {

    });
  })

  //Events

  $messageForm.submit(e =>{
    e.preventDefault();
    socket.emit('send message', $messageBox.val());
    $messageBox.val('');
    console.log($messageBox.val());
  });

  socket.on('new message', (data) => {
    $chat.append(data + '<br/>');
  });

})
