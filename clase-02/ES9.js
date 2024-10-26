/* 
Las principales funcionalidades de este release son:
Resolvedores de promesas con .finally(), para atender una promesa, se cumpla o no se cumpla. (Lo veremos más adelante)
Mayor control a los objetos con operadores rest y spread (aplicable también a arrays)
*/

// Operador spreed

const object1 = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

console.log(object1);

const object2 = {
  ...object1,
  propObject2: "Holis",
};
console.log(object2);

const object3 = {
  ...object1,
  prop2: object1.prop2.toString(),
};

console.log(object3);

// Operador rest 

const { prop2, ...rest } = object3;
console.log(rest);
console.log(prop2);

const user = {
  name: "Juan",
  email: "jp@gamail.com",
  password: "123",
  age: 23
};

const { password , age, ...userData } = user;

console.log(userData);