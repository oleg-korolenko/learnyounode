const net = require('net');
const time = require('strftime');
const port = process.argv[2];
const server = net.createServer((socket) => {socket.end(time('%F %R')+'\n');});
server.listen(port);