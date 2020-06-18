const io = require("../server");
const User = require("../class/user.class");

let userActives = new User();

io.on("connection", (client) => {
  console.log("conectado pero desde la una sala");

  client.on('enlazar',(data)=>{
    userActives.addUser(client.id, data.user, data.access_code);
    client.join(data.access_code);
  })

  client.on("transmitir", (data) => {
    client.to(data.access_code).emit("transmitir", data);
  });

  client.on('espectador',(data ,cb) => { 
    let stream = userActives.checkAccessCode(data.access_code)
    if(!strem){
      cb({error:"Este access code es invalido"})
    }
  })

  io.on('disconnect',()=>{
    console.log( userActives.deleteUser(client.id))
  })
});
