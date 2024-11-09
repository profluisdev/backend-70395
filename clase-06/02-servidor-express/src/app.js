import express from "express";

const PORT = 8080;

// Inicializamos express y la variable app contendrá todas las funcionalidades de express
const app = express();

// Configurar un endpoint
// Método GET, es el método que usa el cliente para solicitar información al servidor

// Apertura de un "Endpoint", en el cual el cliente va a realizar una petición http, en este caso una petición get
app.get("/", (req, res) => {
  // Respondemos al cliente
  res.send("Mi primer servidor con Express");
});

app.get("/saludo", (req, res) => {
  res.send("Hola te estoy saludando");
});

app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style="color:blue;">¡Bienvenido a mi primer servidor express!</h1>`);
});

app.get("/usuario", (req, res) => {
  const usuario = {
    nombre: "Juna",
    apellido: "Perez",
    edad: 44,
    correo: "jp@gmail.com",
  };

  res.send(usuario);
});

// req.params

app.get("/parametros/:dato", (req, res) => {
  const parametro = req.params.dato;

  res.send(`El dato ingresado por el cliente es: ${parametro}`);
});

app.get("/parametros/:nombre/:apellido", (req, res) => {
  const nombre = req.params.nombre;
  const apellido = req.params.apellido;

  res.send(`El nombre completo es ${nombre} ${apellido}`);
});

const usuarios = [
  { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54 },
  { id: 2, nombre: "Juan", apellido: "Perez", edad: 33 },
  { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 21 },
];

app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params; // Todos los parámetros que recibimos del lado del cliente siempre son tipo string

  const user = usuarios.find((usuario) => usuario.id === Number(id));
  if (!user) return res.send(`No se encuentra el usuario con el id ${id}`);

  res.send(user);
});

// req.query

app.get("/queries", (req, res) => {
  const { nombre, apellido } = req.query;
  if (!nombre || !apellido) return res.send("Debe ingresar un nombre y apellido por query");

  res.send(`El nombre ingresado es ${nombre} ${apellido}`);
});

const usuarios2 = [
  { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54, genero: "M" },
  { id: 2, nombre: "Juan", apellido: "Perez", edad: 33, genero: "M" },
  { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 21, genero: "M" },
  { id: 4, nombre: "Maria", apellido: "Diaz", edad: 26, genero: "F" },
  { id: 5, nombre: "Emilia", apellido: "Gomez", edad: 36, genero: "F" },
  { id: 6, nombre: "Julia", apellido: "Lopez", edad: 44, genero: "F" },
];

app.get("/usuarios2", (req, res) => {
  const { genero } = req.query;

  if (!genero || (genero !== "M" && genero !== "F")) return res.send(usuarios2);

  const users = usuarios2.filter((usuario) => usuario.genero === genero);

  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
