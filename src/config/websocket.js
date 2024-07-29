// src/config/websocket.js
const WebSocket = require('ws');

const websocketServer = new WebSocket.Server({ noServer: true });

websocketServer.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log('received:', message);
    });

    socket.send('WebSocket connection established');
});

const setupWebSocket = (server) => {
    server.on('upgrade', (request, socket, head) => {
        websocketServer.handleUpgrade(request, socket, head, (ws) => {
            websocketServer.emit('connection', ws, request);
        });
    });
};

module.exports = { websocketServer, setupWebSocket };
