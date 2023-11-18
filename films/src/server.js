const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/films", require("./routes"));

server.use("*", (req, res) => {
	res.status(404).send("Not Found");
});

server.use((err, req, res, next) => {
	res.status(err.statusCode || 500).send({ error: true, message: err.message });
});
module.exports = server;
