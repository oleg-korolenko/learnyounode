const http = require('http');
const url = require('url');
const port = process.argv[2];
const server = http.createServer((req, resp) => {
    const parsedUrl = url.parse(req.url, true);
    const date = new Date(parsedUrl.query['iso']);
    const urlPathName = parsedUrl.pathname;
    let result;
    if (urlPathName == '/api/parsetime') {
        result = utcTime(date);
    }
    else if (urlPathName == '/api/unixtime') {
        result = unixTime(date);
    }
    else {
        resp.writeHead(404);
        resp.end();
    }

    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.end(JSON.stringify(result));

});


function utcTime(date) {
    return {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    };
}
function unixTime(date) {
    return {
        unixtime: date.getTime()
    };
}

server.listen(port);