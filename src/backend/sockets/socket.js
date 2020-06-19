const io = require("../server");
const User = require("../class/user.class");

let userActives = new User();

io.on("connection", (client) => {
  
  client.on("enlazar", (data ,cb) => {
    userActives.addUser(client.id, data.email, data.access_code);
    client.emit('enlazar',{message:'Estas listo para transmitir',users_connect:userActives.getAllUser()})

  });

  client.on("transmitir", (data,cb) => {
    client.join(data.access_code);
    client.to(data.access_code).emit("transmitir", data);
    cb('Estas emitiendo !!!')
  });

  client.on("espectador", (data, cb) => {
    let stream = userActives.checkAccessCode(data.access_code);
    console.log(stream)
    if (stream.length === 0) {
      cb({ error: "Este access code es invalido" });
    }
    client.join(data.access_code);
    client.to(data.access_code).on("transmitir",() =>{
      console.log("Estas espectando el stream de" + stream.user)
    });
  });

  io.on("disconnect", () => {
    console.log(userActives.deleteUser(client.id));
  });
});
