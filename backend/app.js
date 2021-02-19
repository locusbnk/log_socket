const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const { clearInterval } = require("timers");

const app = express();
app.use(index);
//app.use(express.static(path.join(__dirname, '/images/')));

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

  interval = setInterval(() => {
    getApiAndEmit(socket);


    var myArray = [1, 2];
    var rand = myArray[(Math.random() * myArray.length) | 0];

    fs.readFile(__dirname + `/images/${rand}.png`, function (err, data) {
      // it's possible to embed binary data
      // within arbitrarily-complex objects
      if (err) {
        console.error(err);
      } else {
        socket.emit(
          "imageConversionByServer",
          "data:image/png;base64," + data.toString("base64")
        );

        console.log("image file is initialized");
      }
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 2000);

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
