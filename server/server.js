// node modules
const path = require("path");
const http = require('http');
// npm
const express = require('express');
const socketIO = require('socket.io');



// settings
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on("disconnect", () => {
      console.log("User was disconnected.");
    });
});






server.listen(port, () => {
    console.log(`Server up & running on ${port}`);
});