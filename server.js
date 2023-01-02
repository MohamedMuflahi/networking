const { json } = require('stream/consumers');
const WebSocket = require('ws');
// import WebSocket from 'ws';

const server = new WebSocket.WebSocketServer({ port: 8000 });
server.on('connection', (socket) => {
  console.log('A client has connected.');
  // Send data to the client
  console.log(server.clients.size);
  function sendData(data) {
    socket.send(data);
  }

  // Receive data from the client
  socket.onmessage = (event) => {
    console.log(`Received data: ${event.data}`);
    // sendData(event.data);
    server.clients.forEach(function each(client) {
        if (client !== server && client.readyState === WebSocket.OPEN) {
          client.send(event.data);
        }
  })
};

  // Send a message to the client
//   sendData('Hello, client!');
  sendData(JSON.stringify([{x: 1, y: 2}]));

});