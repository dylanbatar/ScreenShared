import socketIOClient from "socket.io-client";

const sockets = socketIOClient("http://localhost:5000");

sockets.on("disconnect", () => {
  console.log("conexion con el servidor perdida");
});

sockets.on("connect", (data) => {
  console.log('Nuevo usuario');
});

// para transmitir pasar el access_code y el email
// transmitir un stream
const transmitir = (data) => {
  sockets.emit("transmitir", data, (resp) => {
    console.log(resp);
  });
};

const beEmiter = (data) => {

  sockets.emit("enlazar", data, (resp) => {
    console.log(resp);
  });
  sockets.on("enlazar",(resp) => {
    console.log(resp);
  });

};

const beReceptor = (access_code) => {
  sockets.emit("espectador", access_code, (resp) => {
    console.log(resp);
  });
  sockets.on('transmitir',(stream)=>{
    console.log(stream)
  })
};

export {  transmitir, beEmiter, beReceptor };
