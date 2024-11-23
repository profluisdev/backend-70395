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
})

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

// Configuración de socket 

const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log(`Nuevo cliente conectado con el id ${socket.id}`);

    // Recibir un evento en el servidor 
    socket.on("message", (data) => {
        console.log(data);
    })

    // Mensaje para un socket individual, solo lo recibe un cliente
    socket.emit("socket-individual", "Este mensaje es socket individual");

    // Mensaje para todos menos el socket actual
    socket.broadcast.emit("socket-excluye-actual", "Este mensaje lo ven todos menos el actual")

    // Mensaje para todos
    io.emit("socket-todos", "Este mensaje lo deberían ver todos")

})