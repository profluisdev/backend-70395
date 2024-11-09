const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hola desde mi servidor backend");
});

server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});

