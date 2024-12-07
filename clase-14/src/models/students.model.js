import mongoose from "mongoose";

// Definimos el nombre de la colección
const studentCollection = "students";

// Definimos el schema del documento
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dni: {
    type: String,
    unique: true,
  },
  course: String,
  note: Number,
});


// Exportamos nuestro modelo creado para poder utilizar en nuestras rutas
export const studentModel = mongoose.model(studentCollection, studentSchema);