const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);
const io = new Server(server,  {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

io.on('connection', (socket) => {
    console.log(`My man ${socket.id} is finally online!`);

    socket.on('send_message', (data) => {
        socket.broadcast.emit('receive_message', data);
    })

    socket.once('')
});



server.listen(3001, () => {
    console.log(`We are live on port ${3001} baby!`);
})