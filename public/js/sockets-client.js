// Referencias del HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOffOnline = document.querySelector("#lblOffOnline");
const txtMessage = document.querySelector("#txtMessage");
const btnOn = document.querySelector("#btnEnviar");

const socket = io();

socket.on("connect", () => {
  // console.log("Conectado");

  lblOffOnline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Desconectado");

  lblOnline.style.display = "none";
  lblOffOnline.style.display = "";
});

socket.on("send-message", (payload) => {
  console.log(payload);
});

btnOn.addEventListener("click", () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: "123ABC",
    date: new Date().getTime(),
  };

  //Enviar mensaje desde servidor con el tercer parámetro
  socket.emit("send-message", payload, (id) => {
    console.log("Desde el server", id);
  });
});
