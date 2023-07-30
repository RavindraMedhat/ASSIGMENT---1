const Bot = require("./ChatBot");
const readline = require("readline");

var r = readline.createInterface(process.stdin, process.stdout);
r.setPrompt("You ::-  ");

r.prompt();

r.on("line", (message) => {
    console.log("Bot ::-  " , Bot.Replay(message))
    r.prompt();
}).on("close", () => { process.exit(0); })