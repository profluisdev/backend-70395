import fs from "fs";
import { v4 as uuid } from "uuid";

export class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./src/managers/data/products.json";
  }

  async getProducts(limit) {
    const file = await fs.promises.readFile(this.path, "utf-8");
    const fileParse = JSON.parse(file);

    this.products = fileParse || [];

    if (!limit) return this.products;

    return this.products.slice(0, limit);
  }

  async addProduct(product) {
    await this.getProducts();

    const { title, description, price, thumbnail, code, stock, category } = product;

    const newProduct = {
      id: uuid(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      status: true,
      category,
    };

    // Validar que el código ya existe
    const productExist = this.products.find((product) => product.code === code);
    if (productExist) throw new Error(`Ya existe un producto con el código ${code}`);

    // Validar que todos los campos sean obligatorios
    const validateProperties = Object.values(newProduct);
    if (validateProperties.includes(undefined)) throw new Error("Todos los campos son obligatorios");

    this.products.push(newProduct);

    await fs.promises.writeFile(this.path, JSON.stringify(this.products));

    return newProduct;
  }

  async getProductById(id) {
    await this.getProducts();
    const product = this.products.find((product) => product.id === id);
    if (!product) throw new Error(`No se encuentra el producto con el id ${id}`);

    return product;
  }

  async updateProduct(id, data) {
    await this.getProductById(id);

    const index = this.products.findIndex((product) => product.id === id);

    this.products[index] = {
      ...this.products[index],
      ...data,
    };

    await fs.promises.writeFile(this.path, JSON.stringify(this.products));

    return this.products[index];
  }

  async deleteProduct(id) {
    await this.getProductById(id);

    this.products = this.products.filter((products) => products.id !== id);

    await fs.promises.writeFile(this.path, JSON.stringify(this.products));

    return `Producto con el id ${id} eliminado`;
  }
}
