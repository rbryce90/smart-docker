const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { log, ExpressAPILogMiddleware } = require("@rama41222/node-logger");
var arguments = process.argv.splice(2);
var fs = require("fs");
var ini = require("ini");

// var app = express();
var morgan = require("morgan");
var multiparty = require("connect-multiparty");
var multipartyMiddleware = multiparty();

app.use(multipartyMiddleware);

var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
var flash = require("connect-flash");

const config = {
  name: "sample-express-app",
  port: 3000,
  host: "0.0.0.0"
};

const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.listen(config.port, config.host, e => {
  if (e) {
    throw new Error("Internal Server Error");
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
