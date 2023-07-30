const url = require("url");
const NodeStatic = require("node-static");
const http = require("http");

// NodeStatic.
const fileServer = new NodeStatic.Server('./Q1.html');

const s = http.createServer((req, res) => {
    console.log("u1");

    const u1 = url.parse(req.url, true);
    
    if (u1.pathname == "/submit_Get" && req.method == "GET") {
        res.write("Name :- ");
        res.write(u1.query.name);
        res.write("\nBirth Date :- ");
        res.write(u1.query.birthdate);
        res.end();

    } else if (u1.pathname == "/submit_Post" && req.method == "POST") {
        let body = "";
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => { res.end(body) });

    }

    req.on('end', function () {
        fileServer.serve(req, res);
    }).resume();
});

s.listen(7485);