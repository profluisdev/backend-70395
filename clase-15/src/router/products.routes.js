import { Router } from "express";
import { ProductManager } from "../managers/productManager.js";
import { productModel } from "../models/product.model.js";

const productManager = new ProductManager();
const router = Router();

router.get("/", async (req, res) => {
  const { limit } = req.query;
  try {
    const products = await productModel.find();
    res.json({ status: "ok", payload: products });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.get("/:pid", async (req, res) => {
  const { pid } = req.params;
  try {
    const findProduct = await productModel.findById(pid);
    if(!findProduct) return res.json({status: "error", message: `Product id ${pid} not found`});

    const product = await productModel.findById(pid);

    res.json({ status: "ok", payload: product });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const product = await productModel.create(body);

    res.json({ status: "ok", payload: product });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.put("/:pid", async (req, res) => {
  const { pid } = req.params;
  const body = req.body;
  try {

    const findProduct = await productModel.findById(pid);
    if(!findProduct) return res.json({status: "error", message: `Product id ${pid} not found`});

    const product = await productModel.findByIdAndUpdate(pid, body, { new: true });

    res.json({ status: "ok", payload: product });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.delete("/:pid", async (req, res) => {
  const { pid } = req.params;
  try {
    const findProduct = await productModel.findById(pid);
    if(!findProduct) return res.json({status: "error", message: `Product id ${pid} not found`});

    const product = await productModel.findByIdAndDelete(pid);

    res.json({ status: "ok", payload: `Product id ${pid} deleted` });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

export default router;
