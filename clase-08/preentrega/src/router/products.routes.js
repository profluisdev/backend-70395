import { Router } from "express";
import { ProductManager } from "../managers/productManager.js";

const productManager = new ProductManager();
const router = Router();

router.get("/", async (req, res) => {
  const { limit } = req.query;
  try {
    const products = await productManager.getProducts(limit);
    res.send(products);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.get("/:pid", async (req, res) => {
  const { pid } = req.params;
  try {
    const product = await productManager.getProductById(pid);

    res.send(product);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const product = await productManager.addProduct(body);

    res.send(product);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.put("/:pid", async (req, res) => {
  const { pid } = req.params;
  const body = req.body;
  try {
    console.log(pid);
    console.log(body);
    const product = await productManager.updateProduct(pid, body);

    res.send(product);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.delete("/:pid", async (req, res) => {
  const { pid } = req.params;
  try {
    const product = await productManager.deleteProduct(pid);

    res.send(product);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

export default router;
