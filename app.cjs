const express = require("express");
const path = require("path");
const app = express();
const socket = require("socket.io");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Candleeater03",
    database: "perflogs"
});

db.connect((err) => {
    if (err) throw err;
    console.log("connected to database");
});

app.use(express.static("./public"));

app.get("/", (request, response) => {
    response.sendFile(path.resolve(__dirname, "./index.html"));
});

const server = app.listen(8080, () => {
    console.log("server is listening on port 8080...");
});

const io = socket(server);

io.sockets.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("sentEntry", (data) => {
        //
    });

    socket.on("requestLogList", () => {
        db.query(
            "SELECT DISTINCT timestamp FROM logs;",
            (err, results) => {
                if (err) throw err;
                console.log("Log List Requested")
                io.to(socket.id).emit("logListSent", results);
            }
        )
    });
});
