import socketIOClient from "socket.io-client";

const sockets = socketIOClient("http://localhost:5000");

sockets.on("disconnect", (data) => {
  console.log("conexion con el servidor perdida");
});

// para transmitir pasar el access_code y el email
const transmitir = (data) => {
  console.log(data)
  sockets.emit("transmitir", data);
};

const recibir = () => {
  sockets.on('transmitir',(data)=>{
    console.log(data)
  })
};

const beEmiter = (data)=>{
  sockets.emit('enlazar',data)
}

export { recibir, transmitir,beEmiter };
