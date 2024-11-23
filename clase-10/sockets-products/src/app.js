import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

const app = express();
// Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 8080;
// Configuración de handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

// Configuración de socket

let products = [];
const io = new Server(httpServer);

io.on("connection", (socket) => {
console.log("nuevo cliente contectado");
  socket.on("product", (data) => {
    products.push(data);

    // Enviar la información actualizada de los productos a todos los clientes
    io.emit("products", products)

    socket.on("changeStock", (data) => {
      products = data;
      io.emit("products", products);
    })
  })
});
