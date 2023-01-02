const WebSocket = require('ws');
// import WebSocket from 'ws';

const server = new WebSocket.Server({ port: 8000 });
server.on('connection', (socket) => {
  console.log('A client has connected.');
  console.log(server)
  // Send data to the client
  function sendData(data) {
    socket.send(data);
  }

  // Receive data from the client
  socket.onmessage = (event) => {
    console.log(`Received data: ${event.data}`);
    sendData(event.data);
  };

  // Send a message to the client
//   sendData('Hello, client!');
  sendData(JSON.stringify({x: 1, y: 2}));

});