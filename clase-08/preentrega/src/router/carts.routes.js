import { Router } from "express";
import { CartManager } from "../managers/cartManager.js";
import { ProductManager } from "../managers/productManager.js";

const cartManager = new CartManager();
const productManager = new ProductManager();
const router = Router();

// Crear un carrito
router.post("/", async (req, res) => {
  try {
    const cart = await cartManager.createCart();

    res.send(cart);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// Obtener un carrito por id
router.get("/:cid", async (req, res) => {
  const { cid } = req.params;
  try {
    const cart = await cartManager.getCartById(cid);

    res.send(cart);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// Agregar un producto a un carrito
router.post("/:cid/product/:pid", async (req, res) => {
  const { cid, pid } = req.params;
  try {
    // Validar que el producto exista
    const product = await productManager.getProductById(pid);
    if (!product) throw new Error(`No se encuentra el producto con el id ${pid}`);

    const cart = await cartManager.addProductToCart(cid, pid);

    res.send(cart);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

export default router;
