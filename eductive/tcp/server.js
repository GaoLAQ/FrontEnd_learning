var net = require('net');

var server = net.createServer();

const port = 3500; 

server.on('connection', function(socket){
    console.log("Client connected from", socket.remoteAddress, socket.remotePort)
    socket.write("heoll from the server!")
    socket.on('data', function(data){
        console.log("Msg from client:", data.toString())
    })
})

