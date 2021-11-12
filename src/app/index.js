console.log("index.js");

const express = require("express");
// var server = express.createServer();
// express.createServer()  is deprecated.
const server = express(); // better instead
const path = require("path");

// app.use(express.static(__dirname)); // Current directory is root
server.use(express.static(path.join(__dirname, "../../dist")));

server.listen(3000);
