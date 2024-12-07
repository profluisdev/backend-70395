import mongoose from "mongoose";

const productsCollection = "products";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  thumbnail: String,
  code: String,
  stock: Number,
  status: {
    type: Boolean,
    default: true
  },
  category: String
})

export const productModel = mongoose.model(productsCollection, productSchema);

