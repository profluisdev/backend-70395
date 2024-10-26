/* 
Async await para mejor control asíncrono, sobre este ahondaremos más en futuras clases.
Object.entries, Object.values, Object.keys para un mejor control interno sobre las propiedades de un objeto.
*/

let person = {
  id: 1,
  firstName: "Luz",
  lastName: "Escalante",
  age: 25,
  gender: "F"
};

// Objet.entries nos devuelve un array con arrays de dos elementos, en la posición 0 está la key y en la posición 1 el value
console.log(Object.entries(person));

// Objet.keys nos devuelve un array con todas las key del objeto
console.log(Object.keys(person));

// Objet.values nos devuelve un array con todos los values del objeto
console.log(Object.values(person));

const personValues = Object.values(person);

if(personValues.includes("Luz")) {
  console.log("ok");
}
