/* 
Operador nullish. Sirve para poder colocar un valor por default a variables que podrían ser nulas o indefinidas, a diferencia del operador ||, éstas filtran “falseys”
Variables privadas dentro de las clases, esto permite que algunas variables no sean accesibles desde el entorno de instancia de una clase y sólo sea utilizada de manera interna.
*/

// Operador nullish

let variablePrueba = 0;

let variableAsignable = variablePrueba || "Sin valor";
console.log(variableAsignable);

let variableConNullish = variablePrueba ?? "Sin valor";
console.log(variableConNullish);

let isActive = false;

let userIsActive = isActive ?? "Invalid";
console.log(userIsActive);
