import { Router } from "express";
import { CartManager } from "../managers/cartManager.js";
import { ProductManager } from "../managers/productManager.js";
import { cartModel } from "../models/cart.model.js";
import { productModel } from "../models/product.model.js";

const cartManager = new CartManager();
const productManager = new ProductManager();
const router = Router();

// Crear un carrito
router.post("/", async (req, res) => {
  try {
    const cart = await cartModel.create({});

    res.json({ status: "ok", payload: cart });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// Obtener un carrito por id
router.get("/:cid", async (req, res) => {
  const { cid } = req.params;
  try {
    const cart = await cartModel.findById(cid);
    if (!cart) return res.json({ status: "error", message: `Cart id ${cid} not found` });

    res.json({ status: "ok", payload: cart });
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
    const findProduct = await productModel.findById(pid);
    if (!findProduct) return res.json({ status: "error", message: `Product id ${pid} not found` });

    const findCart = await cartModel.findById(cid);
    if (!findCart) return res.json({ status: "error", message: `Cart id ${cid} not found` });

    const product = findCart.products.find((productCart) => productCart.product === pid);
    if (!product) {
      // Agregar el producto al carrito si no existe
      findCart.products.push({ product: pid, quantity: 1 });
    } else {
      // Incrementar la cantidad en 1 si el producto ya existe
      product.quantity++;
    }


    const cart = await cartModel.findByIdAndUpdate(cid, { products: findCart.products }, { new: true });

    res.json({ status: "ok", payload: cart });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

export default router;
