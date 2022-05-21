const exprss = require("express");

const server = exprss();

server.get('/', (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.statusCode = 200;

    res.end("<link rel='stylesheet' href='main.css'><script src='main.js'></script><h1>Hello!</h1>");
});

server.get('/main.js', (req, res) => {
    res.setHeader("content-type", "text/javascript;charset=utf-8");
    if (req.headers['If-None-Match'] === "abcdefg") {
        res.statusCode = 304;
    }
    else {
        res.setHeader("Etag", "abcdefg");
        res.statusCode = 200;
    }

    res.end("console.log('哈哈')");
});

server.get('/main.css', (req, res) => {
    if (req.headers['if-modified-since']) {
        res.statusCode = 304;
    }
    else {
        res.setHeader("last-modified", (new Date()).toUTCString());
        res.statusCode = 200;
    }

    res.end("body{color: red;}");
});

server.listen(3000, () => {
    console.log('server is running at 3000...');
});