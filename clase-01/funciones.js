/* 
Las funciones son bloques de instrucciones que trabajan sobre un scope interno 
(conocido como scope local). Pueden encontrarse en su sintaxis básica o en su 
notación flecha.
*/

// Funciones clásicas sin retorno

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 5);

// Funciones clásicas con retorno
function showName(name) {
  return name;
}

showName("Pedro");

const name = showName("Gabriel");
console.log(name);

const resultSum = sum(20, 30);
console.log(resultSum);

// Funciones flechas sin retorno

const showLastName = (lastName) => {
  console.log(lastName);
};
showLastName("Perez");

// Funciones flechas con retorno

const res = (num1, num2) => {
  if (num1 < num2) {
    return "No se puede devolver un número negativo";
  }

  return num1 - num2;
};

// Funciones flechas con return implícito
const multip = (num1, num2) => num1 * num2;

const resultRest = res(10, 30);
console.log(resultRest);

