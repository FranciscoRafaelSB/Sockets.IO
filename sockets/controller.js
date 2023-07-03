export const socketController = (socket) => {
  socket.on("disconnect", () => {
    // console.log("Cliente desconectado", socket.id);
  });

  //Recibir mensaje del cliente en el servidor
  socket.on("send-message", (payload, callback) => {
    // const id = 123456;
    // callback(id);
    // console.log(payload);

    //Enviar mensaje a todos los clientes menos al que lo emitió
    socket.broadcast.emit("send-message", payload);

    //Enviar mensaje a todos los clientes
    // this.io.emit("send-message", payload);
  });
};
