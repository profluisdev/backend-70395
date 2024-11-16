import fs from "fs";

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./data/products.json";
  }

  async getProducts() {
    try {
      const file = await fs.promises.readFile(this.path, "utf-8");
      const fileParse = JSON.parse(file);

      this.products = fileParse || [];
    } catch (error) {
      console.log(error);
    }
  }

  async addProduct(product) {
    try {
      await this.getProducts();

      const { title, description, price, thumbnail, code, stock } = product;

      const newProduct = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      // Validar que el código ya existe
      const productExist = this.products.find((product) => product.code === code);
      if (productExist) throw new Error(`Ya existe un producto con el código ${code}`);

      // Validar que todos los campos sean obligatorios
      const validateProperties = Object.values(newProduct);
      if (validateProperties.includes(undefined)) throw new Error("Todos los campos son obligatorios");

      this.products.push(newProduct);

      await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id) {
    try {
      await this.getProducts();
      const product = this.products.find((product) => product.id === id);
      if (!product) throw new Error(`No se encuentra el producto con el id ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(id, data) {
    try {
      await this.getProductById(id);

      const index = this.products.findIndex((product) => product.id === id);

      this.products[index] = {
        ...this.products[index],
        ...data,
      };

      await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id) {
    try {
      await this.getProductById(id);

      this.products = this.products.filter((products) => products.id !== id);

      await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    } catch (error) {
      console.log(error);
    }
  }
}

const products = new ProductManager();
// products.addProduct({
//   title: "Producto 1",
//   description: "Descripción del producto 1",
//   price: 100,
//   thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//   code: "ABC123",
//   stock: 10,
// });

// products.addProduct({
//   title: "Producto 2",
//   description: "Descripción del producto 1",
//   price: 100,
//   thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//   code: "ABC124",
//   stock: 10,
// });

// products.addProduct({
//   title: "Producto 3",
//   description: "Descripción del producto 1",
//   price: 100,
//   thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//   code: "ABC125",
//   stock: 45
// });

// products.addProduct({
//   title: "Producto 4",
//   description: "Descripción del producto 1",
//   price: 100,
//   thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//   code: "ABC124",
//   stock: 10,
// });

// // products.getProducts();
// products.getProductById(4);

// products.getProducts();

// products.updateProduct(3, { description: "Descripción del producto 2", title: "Otro producto" });

// products.deleteProduct(2);
