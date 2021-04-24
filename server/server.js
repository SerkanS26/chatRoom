const express = require("express");
const http = require("http");
// const bodyParser = require("body-parser");
const port = 8080;

const app = express();

// const clientPath = __dirname + "/../client";
const clientPath =`${__dirname}/../client`;

let counter = 0;
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(clientPath));

const server = http.createServer(app);

const io = require("socket.io")(server);

server.listen(port, () =>{
    console.log("server running on "+ port);
});

io.on('connection', (socket) => {
    counter++;

    socket.on('sendToAll', (userName,message) =>{
        io.emit("displayMessage", (userName),(message));
    });

    socket.on('sendToMe', (message) =>{
        socket.emit("displayMessage", (message));
    });

    console.log(counter + " someone connected")


});

