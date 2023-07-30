const NodeStatic = require("node-static");
const http = require("http");
const url = require("url");

const fileServer = new NodeStatic.Server('./Q2.html');

const s = http.createServer((req, res) => {
    const u1 = url.parse(req.url, true);
    if (u1.pathname == "/gethello" && req.method == "GET") {
        res.end('Hello NodeJS!!');
    }

    req.on('end', function () {
        // console.log("hii")
        fileServer.serve(req, res);
    }).resume();
});

s.listen(7485);