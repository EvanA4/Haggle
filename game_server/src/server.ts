import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";


const app = express();
const server = createServer(app as any);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});


io.on('connection', (socket) => {
    console.log('New connection!');

    socket.on('myevent', (msg) => {
        console.log(`myevent: "${msg}"`);
        io.emit('myevent', msg);
    });

    socket.on('disconnect', () => {
        console.log('Someone disconnected.');
    });
});


server.listen(8080, () => {
    console.log('Server running on port 8080...');
});