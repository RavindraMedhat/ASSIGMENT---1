const mysql = require('nodejs-mysql').default;
const readline = require("readline");

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "node_assigment_1",
};

const db = mysql.getInstance(config);

async function getInput(prompt) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(prompt, (input) => {
            rl.close();
            resolve(input);
        });
    });
}

async function main() {
    try {
        console.log("Connected!");

        const name = await getInput("Enter Name: ");
        const dept = await getInput("Enter Dept: ");

        var sql = `INSERT INTO employee(name, dept) VALUES ('${name}', '${dept}')`;
        await db.exec(sql);

        const result = await db.exec("SELECT * FROM employee");
        console.log("DATA :-------")
        for (var i in result) {
            console.log(`Name: ${result[i].name} Dept: ${result[i].dept}`);
        }

        process.exit(0);
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
}

db.connect()
    .then(main)
    .catch((err) => {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    });
