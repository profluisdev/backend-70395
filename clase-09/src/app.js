import express from "express";
import handlebars from "express-handlebars";

const app = express();
// Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configuración de handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const { name } = req.query;

  res.render("home", { name, styles: "home.css" });
});

app.get("/users", (req, res) => {
  let users = [
    {
      name: "Juan",
      lastName: "Perez",
    },
    {
      name: "Pedro",
      lastName: "Sanchez",
    },
    {
      name: "Ana",
      lastName: "Diaz",
    },
  ];

  res.render("users", { users });
  
})

app.get("/admin", (req, res) => {

  let user = {
    name: "Juan",
    lastName: "Perez",
    isAdmin: false
  }

  res.render("admin", user);
  
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
