import { courseModel } from "./course.model.js";
import { studentModel } from "./student.model.js";
import { userModel } from "./user.model.js";
import mongoose from "mongoose";

const environment = async () => {
  await mongoose.connect("mongodb+srv://admin:123@cluster70395.glb9w.mongodb.net/clase-16");
    // 1 Creamos el curso
  // await courseModel.create({
  //   title: "Curso de Backend",
  //   description: "Este es un curso para devs productivos que no copian y pegan",
  //   difficulty: 5,
  //   topics: ["Javascript", "Node", "Express"],
  //   professor: "Luis"
  // })

  // 2 Creamos el estudiante y le incorporamos el curso creado
  // await studentModel.create({
  //   first_name: "Pepe",
  //   last_name: "Sapo",
  //   email: "sp@gmail.com",
  //   gender: "Sapo",
  //   courses:[{course: "675daa2a7bf39e2636e4276e"}]
  // })

  // Consultamos el estudiante creado
  const student = await studentModel.find({ _id: "675daac0a06ff8e32fe7cadc"})
  console.log(JSON.stringify(student, null, "\t"));
  
};

environment();
