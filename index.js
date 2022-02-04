const socket = require('socket.io');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    const readStream = fs.createReadStream(indexPath);

    readStream.pipe(res);
});

const io = socket(server);

io.on('connection', (client) => {

    client.on('user-name', (data) => {
        const userNameData = data;
        client.broadcast.emit('recordedUser', userNameData);
    });

    client.on('user-name-exit', (data) => {
        const userNameData = data;
        client.broadcast.emit('exitUser', userNameData);
    });

    client.on('client-msg', (data) => {
        const serverData = {
            message: data.message,
            name: data.name,
        };
        client.broadcast.emit('server-msg', serverData);
        client.emit('server-msg', serverData);
    });

});

server.listen(5555);