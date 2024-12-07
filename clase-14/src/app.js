import express from "express";
import { connectMongoDB } from "./config/mongoDB.config.js";
import studentsRoutes from "./routes/students.routes.js"

connectMongoDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/students", studentsRoutes)

app.listen(8080, () => {
  console.log("Server on port 8080");
})