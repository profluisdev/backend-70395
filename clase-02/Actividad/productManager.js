class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
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
    if (productExist) return console.log(`Ya existe un producto con el código ${code}`);

    // Validar que todos los campos sean obligatorios
    const validateProperties = Object.values(newProduct);
    if (validateProperties.includes(undefined)) return console.log("Todos los campos son obligatorios");

    this.products.push(newProduct);
  }

  getProducts() {
    console.log(this.products);
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) return console.log(`No se encuentra el producto con el id ${id}`);

    console.log(product);
  }
}

const products = new ProductManager();
products.addProduct({
  title: "Producto 1",
  description: "Descripción del producto 1",
  price: 100,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "ABC123",
  stock: 10,
});

products.addProduct({
  title: "Producto 2",
  description: "Descripción del producto 1",
  price: 100,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "ABC124",
  stock: 10,
});

products.addProduct({
  title: "Producto 3",
  description: "Descripción del producto 1",
  price: 100,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "ABC125",
});

products.addProduct({
  title: "Producto 4",
  description: "Descripción del producto 1",
  price: 100,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "ABC124",
  stock: 10,
});

// products.getProducts();
products.getProductById(3);
