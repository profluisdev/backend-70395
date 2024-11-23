// Configuramos el socket del lado del cliente
const socket = io(); // Hacemos referencia a socket.io

let user;

let chatBox = document.getElementById("chatBox");

// Alerta para ingresar datos
Swal.fire({
  title: "Identificate",
  input: "text",
  text: "Ingrese el usuario para identificarte",
  inputValidator: (value) => {
    return !value && "Por favor debe ingresar el nombre de un usuario";
  },
  allowOutsideClick: false,
}).then((result) => {
  user = result.value;

  // Enviamos el usuario al servidor
  socket.emit("newUser", user);
});

// Evento para los mensajes

chatBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (chatBox.value.trim().length > 0) {
      socket.emit("message", { user: user, message: chatBox.value });
      chatBox.value = "";
    }
  }
});

// Recibimos los mensajes del chat actualizados
socket.on("messageLogs", (data) => {
  let messagesLogs = document.getElementById("messageLogs");
  let messages = "";

  data.forEach((messageLog) => {
      messages = messages + `${messageLog.user} dice: ${messageLog.message} </br>`
  });

  messagesLogs.innerHTML = messages;
});

socket.on("newUser", (data) => {
  Swal.fire({
    text: `Se conectó ${data}`,
    toast: true,
    position: "top-right",
    timer: 2000
  })
})