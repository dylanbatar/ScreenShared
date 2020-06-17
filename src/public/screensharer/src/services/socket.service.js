import socketIOClient from "socket.io-client";

const sockets = socketIOClient("http://localhost:5000");

sockets.on("connect", () => {
  console.log("user nuevo");
});

sockets.on("disconnect", (data) => {
  console.log("conexion con el servidor perdida");
});

const emitDataUser = (user) => {
  sockets.emit("get-user", { user: user });
};

export { emitDataUser };
