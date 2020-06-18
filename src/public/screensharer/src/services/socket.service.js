import socketIOClient from "socket.io-client";

const sockets = socketIOClient("http://localhost:5000");

sockets.on("disconnect", (data) => {
  console.log("conexion con el servidor perdida");
});

sockets.on('transmitir',(data)=>{
  console.log(data)
})

const emitDataUser = (user) => {
  sockets.emit("get-user", { user: user });
};

const beEmiter = (user, access_code) => {
  sockets.emit("enlazar", { user, share: true, access_code });
};

const transmitir = (data) => {
  console.log(data)
  sockets.emit("transmitir", data);
};

const beReceptor = () => {};

export { emitDataUser, beEmiter, transmitir };
