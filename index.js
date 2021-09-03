const restify = require('restify');
const fs = require('fs');

// Create HTTP server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log("access to localhost:3978 via Browser")
});

// Listen for incoming requests.
server.get('/', (req, res) => {
    console.dir(req.headers);
    res.setHeader("Set-Cookie", "path=root");
    res.write("Welcome to the start test page\n\n");
    res.write("Request cookie:"+JSON.stringify(req.headers.cookie));
    res.end();
});

server.get('/hogehoge', (req, res) => {
    console.dir(req.headers);
    res.setHeader("Set-Cookie", "path=hogehoge");
    res.write("Welcome to the hogehoge\n\n");
    res.write("Request cookie:"+JSON.stringify(req.headers.cookie));
    res.end();
});

server.get('/fugafuga', (req, res) => {
    console.dir(req.headers);
    res.setHeader("Set-Cookie", "path=fugafuga");
    res.write("Welcome to the fugafuga\n\n");
    res.write("Request cookie:"+JSON.stringify(req.headers.cookie));
    res.end();
});

server.get('/get-html', (req, res) => {
    fs.readFile("./cookieTest.html", 'UTF-8',
        function(err, data) {
            res.setHeader("Set-Cookie", "html=hogehoge");
            res.setHeader("Set-Cookie", "path=hogehoge-html");
            res.write(data);
            res.end();
        });
});