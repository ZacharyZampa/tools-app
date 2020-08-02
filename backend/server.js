const app = require("./backend/app");
const debug = require("debug")("tools-app");
const http = require("http");

const standardizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const portErr = typeof port === "string" ? "pipe " + port : "port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(portErr + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(portErr + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = standardizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
