const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use(
	"/Characters",
	createProxyMiddleware({
		target: "http://characters:8001",
		changeOrigin: true,
	})
);
app.use(
	"/Films",
	createProxyMiddleware({
		target: "http://films:8002",
		changeOrigin: true,
	})
);
app.use(
	"/Planets",
	createProxyMiddleware({
		target: "http://planets:8003",
		changeOrigin: true,
	})
);
app.listen(8000, () => {
	console.log("Gateway on port 8000");
});
