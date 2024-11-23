// Configuramos el socket del lado del cliente
const socket = io(); // Hacemos referencia a socket.io

const form = document.getElementById("form");
const productsList = document.getElementById("productsList");

form.onsubmit = (e) => {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const price = e.target.elements.price.value;
  const stock = e.target.elements.stock.value;

  const product = {
    title,
    price,
    stock,
  };
  // Enviar el producto al servidor
  console.log(product);
  socket.emit("product", product);
};

socket.on("products", (data) => {
  
  productsList.innerHTML = "";
  data.forEach((product, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <p>Título: ${product.title}</p>
    <p>Precio: ${product.price}</p>
    <p>Stock: ${product.stock}</p>
    `;

    productsList.append(div);
    const btn = document.createElement("button");
    btn.innerText = "comprar";
    btn.onclick = () => {
      console.log("comprando");
      data[index].stock = data[index].stock - 1; 
      socket.emit("changeStock", data);
    };
    div.append(btn);
  });
});
