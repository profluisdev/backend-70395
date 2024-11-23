import fs from "fs";
import { v4 as uuid } from "uuid";

export class CartManager {
  constructor() {
    this.carts = [];
    this.path = "./src/managers/data/carts.json";
  }

  // Obtener todos los carritos del archivo carts.json al igual que en el caso de los productos
  async getCarts() {
    const file = await fs.promises.readFile(this.path, "utf-8");
    const fileParse = JSON.parse(file);

    this.carts = fileParse || [];

    return this.carts;
  }

  //Crear un método createCart que genere un nuevo carrito con un id único y un array de productos vacío.

  async createCart() {
    await this.getCarts();

    const newCart = {
      id: uuid(),
      products: [],
    };

    this.carts.push(newCart);

    await fs.promises.writeFile(this.path, JSON.stringify(this.carts));

    return newCart;
  }

  // Crear un método getCartById que reciba un id de carrito y devuelva el carrito correspondiente.
  async getCartById(cid) {
    await this.getCarts();

    const cart = this.carts.find((cart) => cart.id === cid);

    if (!cart) throw new Error("Cart not found");

    return cart;
  }

  // Crear un método addProductToCart que reciba un id de carrito y un id de producto y agregue el producto al carrito correspondiente.
  // Si el producto ya existe en el carrito, se debe incrementar la cantidad en 1.
  async addProductToCart(cid, pid) {
    // Obtener el carrito por id y validar que exista
    const cart = await this.getCartById(cid);

    const product = cart.products.find((productCart) => productCart.product === pid);
    if (!product) {
      // Agregar el producto al carrito si no existe
      cart.products.push({ product: pid, quantity: 1 });
    } else {
      // Incrementar la cantidad en 1 si el producto ya existe
      product.quantity++;
    }

    // Guardar los cambios en el archivo carts.json
    await fs.promises.writeFile(this.path, JSON.stringify(this.carts));

    return cart;
  }
}
