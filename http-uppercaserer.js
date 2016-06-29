const http = require('http');
const map = require('through2-map');

const port = process.argv[2];
const server = http.createServer((req, resp) => {
    if (req.method == 'POST') {
        req.pipe(map((chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(resp);
    }

});
server.listen(port);