import { userModel } from "./user.model.js";
import mongoose from "mongoose";

const environment = async () => {
  await mongoose.connect("mongodb+srv://admin:123@cluster70395.glb9w.mongodb.net/clase-16");
  let response = await userModel.find({first_name: "Celia"}).explain("executionStats");
  console.log(response);
};

environment();