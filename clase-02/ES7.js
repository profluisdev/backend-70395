/* 
Se introduce el operador exponencial **, independizándose poco a poco de la librería Math.
Manejo de array includes. Éste nos permitirá saber si algún elemento existe dentro del arreglo.
*/

let numbers = [1, 2, 3, 4, 5, 6];

let numbersExponential = numbers.map((number, index) => number ** index); // 1**0 2**1 3**2
// 3**2 = 3 X 3 = 9
console.log(numbersExponential);

// Array include

let names = ["Juan", "Pedro", "Maria", "Jose"];
// El método include() nos devuelve un booleano true o false

if (names.includes("juan")) {
  console.log("El nombre se encuentra en el array");
} else {
  console.log("El nombre no se encuentra en el array");
}

// Callback
numbers.forEach( (number) => {
  console.log(number + 1);
} )

