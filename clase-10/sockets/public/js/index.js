// Configuramos el socket del lado del cliente
const socket = io(); // Hacemos referencia a socket.io

// Enviamos un evento message al servidor
socket.emit("message", "Hola te saludo desde el front");

// Escuchar los socket del servidor
socket.on("socket-individual", (data) => {
  console.log(data);
});

socket.on("socket-excluye-actual", (data) => {
  console.log(data);
});

socket.on("socket-todos", (data) => {
  console.log(data);
});
