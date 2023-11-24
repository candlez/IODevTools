const express = require("express");
const path = require("path");
const app = express();
const socket = require("socket.io");


app.use(express.static("./public"));

app.get("/", (request, response) => {
    response.sendFile(path.resolve(__dirname, "./public/index.html"));
});

const server = app.listen(8080, () => {
    console.log("server is listening on port 8080...");
});