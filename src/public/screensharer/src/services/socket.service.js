import socketIOClient from "socket.io-client";

const sockets = socketIOClient("http://localhost:5000");

sockets.on("connect", (data) => {
 
});

 sockets.on('nuevo-user',(data)=>{
    console.log(data)
  })

sockets.on("disconnect", (data) => {
  console.log("conexion con el servidor perdida");
});

const emitDataUser = (user) => {
  sockets.emit("get-user", { user: user });
};

const beEmiter = (user) => {
  sockets.emit("enlazar", { user, share: true });
};

// TODO para manana 
const transmitir = (data) => {

}

const beReceptor = () => {};

export { emitDataUser, beEmiter };
