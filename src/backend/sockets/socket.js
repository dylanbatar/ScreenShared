const io = require("../server");
const User = require("../class/user.class");

let userActives = new User();

io.on("connection", (client) => {

  client.on("disconnect", () => {
    console.log("Un usuario se a desconectado");
  });

  client.on("enlazar", (data, cb) => {
    if (data.user) {
      console.log(data)
      userActives.addUser(client.id, data.user,data.access_code, data.share);
    }

    client.emit("nuevo-user", userActives.getAllUser());
  });

  client.on("transmitir", (data) => { 
    let user = userActives.getUser(client.id);
    client.broadcast
      .to(data.id)
      .emit("transmitir", { user, message: data.mensaje });
  });

  client.emit("welcome", { mensaje: "Bienvenido a ScreenMirror" });
});
