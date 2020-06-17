const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, { origins: "*:*" });
const cors = require('cors');

const dotenv = require("dotenv");
const path = require("path");

// DB CONECTION
// require('./db');

dotenv.config();

// SERVER CONFIG
app.use(cors({origin:true}))
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// SOCKET CONFIG
module.exports = io;
require('./sockets/socket')

// ROUTES
app.use(require("./routes/index.route"));

// LISTER SERVE
http.listen(process.env.PORT, () => {
  console.log("Estamos ready");
});
