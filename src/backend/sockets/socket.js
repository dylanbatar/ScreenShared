const io = require("../server");
const User = require("../class/user.class");

let userActives = new User();

io.on("connection", (client) => {
  console.log("conectado pero desde la una sala");

  client.on("transmitir", (data) => {
    userActives.addUser(client.id, data.user, data.access_code);
    client.join(data.access_code);
    client.to(data.access_code).emit("transmitir", data);
  });
});
