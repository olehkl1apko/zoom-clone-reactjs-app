const express = require("express");
const http = require("http");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const twilio = require("twilio");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get("/api/get-turn-credentials", (_, res) => {
  const client = twilio(accountSid, authToken);

  res.send({ token: null });
  try {
    client.tokens.create().then((token) => {
      res.send({ token });
    });
  } catch (err) {
    console.log("error occurred when fetching turn server credentials: ", err);
    res.send({ token: null });
  }
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected ${socket.id}`);

  socket.on("create-new-room", (data) => {
    // createNewRoomHandler(data, socket);
  });

  socket.on("join-room", (data) => {
    // joinRoomHandler(data, socket);
  });

  socket.on("disconnect", () => {
    // disconnectHandler(socket);
  });

  socket.on("conn-signal", (data) => {
    // signalingHandler(data, socket);
  });

  socket.on("conn-init", (data) => {
    // initializeConnectionHandler(data, socket);
  });

  socket.on("direct-message", (data) => {
    // directMessageHandler(data, socket);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
