const WebSocket = require('ws')
const http = require('http');

var st = require('node-static');

var fileServer = new st.Server('./page');

var over = 0;
var ball = 0;
var score = 0;
var wicket = 0;


var httpserver = http.createServer((req, res) => {
    req.on("end", () => {
        fileServer.serve(req, res);
    }).resume();
}).listen(7485, () => {
    console.log("Server is listening on port 7485");
})

const wss = new WebSocket.Server({ server: httpserver });
const clients = [];

wss.on("connection", (ws) => {
    clients.push(ws);

    var sc = score + "/" + wicket + "   (" + over + "." + ball + ")";
    ws.send(sc);

    ws.on("message", (message) => {
        console.log(message.toString());

        if (message == "Wicket") {
            wicket += 1;
        } else {
            score += parseInt(message);
        }

        if (ball == 5) {
            over += 1;
            ball = 0;
        } else {
            ball += 1;
        }

        sc = score + "/" + wicket + "   (" + over + "." + ball + ")";
        console.log(sc);
        clients.forEach((client) => {
            client.send(sc);
        });
    })
})
