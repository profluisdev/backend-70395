
let name = "Juan";

if(true){
  let name = "Pedro";
}

console.log(name);


// Mutabilidad de const

/* 
Las constantes no pueden ser reasignadas en su valor, pero no quiere
decir que no sean inmutables, si el valor de una constante es algo 
mutable como un array o un objeto, se pueden cambiar los valores 
internos de sus elementos.
*/

const lastName = "Perez";

const person = {
  firstName: "Juan",
  lastName: "Perez",
  age: 30
};

console.log(person);

person.age = 25;

console.log(person);

const persons = [];

console.log(persons);

persons.push(person);

console.log(persons);
