const express = require("express");
const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);
//https://stackoverflow.com/questions/35713682/socket-io-gives-cors-error-even-if-i-allowed-cors-it-on-server
const options = {
  cors: true,
  origins: ["http://127.0.0.1:3000"],
};
const io = require("socket.io")(server, options);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    getApiAndEmit(socket);
    fs.readFile(__dirname + "./images/1.png", function (err, buf) {
      // it's possible to embed binary data
      // within arbitrarily-complex objects
      socket.emit("image", { image: true, buffer: buf.toString("base64") });

      console.log("image file is initialized");
    });
  }, 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response = new Date();
 
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  
};

server.listen(port, () => console.log(`Listening on port ${port}`));
