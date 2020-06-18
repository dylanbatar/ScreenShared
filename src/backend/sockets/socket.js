const io = require("../server");

io.on("connection", (client) => {
  // console.log("Usuario conectado",client.handshake.headers['user-agent']);
  client.on("disconnect", () => {
    console.log("Un usuario se a desconectado");
  });

  client.on("mandarDatos", (data, callback) => {
    if (!data.share) {
      callback({ resp: "No estas transmitiendo" });
    } else {
      console.log(data);
      callback({ resp: `${data.usuario} esta transmitiendo` });
    }
  });

  client.emit("welcome", { mensaje: "Bienvenido a ScreenMirror" });

  client.on("get-user", (client, cb) => {
    // console.log(client.headers.host);
  });
});
