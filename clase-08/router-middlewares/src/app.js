import express from "express";
import userRoutes from "./router/user.routes.js";
import productsRoutes from "./router/products.routes.js";

const app = express();
// Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Con este middleware configuramos la carpeta de acceso público de nuestro servidor
app.use(express.static("public"));

// Middleware a nivel de aplicación
app.use((req, res, next) => {
  console.log("Middleware a nivel de aplicación ejecutandose");
  next();
});

app.use("/user", userRoutes);
app.use("/products", productsRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
