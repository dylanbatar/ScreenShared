const io = require("../server");
const User = require("../class/user.class");

let userActives = new User();

io.on("connection", (client) => {
  console.log(userActives.getAllUser());

  // se ejecuta solo si un cliente elige compartir su pantalla
  client.on("enlazar", (data, cb) => {
    userActives.addUser(client.id, data.email, data.access_code);
    client.emit("enlazar", {
      message: "Estas listo para transmitir",
      users_connect: userActives.getAllUser(),
    });
    console.log(userActives.getAllUser());
    client.join(data.access_code);
  });

  // Se ejecuta cuando ya se empieza a compartir pantalla
  client.on("transmitir", (data, cb) => {
    let user = userActives.joinByEmail(data.email);
    client.broadcast.to(user.access_code).emit("transmitir", data );
    cb("Estas emitiendo !!!", data);
  });


  // Se ejecuata una vez presionado el boton de entrar al stram
  // Solo se puede ingresar con un access_code valido

  // validar que el access_code no existe
  client.on("espectador", (access_code, cb) => {
    let stremer = userActives.checkAccessCode(access_code);
    if(stremer){
      client.join(access_code);
      client.emit("transmitir",{message:`conectado al stream de ${stremer.user}`} )
    }else{
      client.emit("transmitir",{message:`Access_code no valido`} )
    }

  });

  // Si el cliente se va, se saca de la lista de streams
  client.on("disconnect", () => {
    console.log(userActives.deleteUser(client.id));
  });
});
