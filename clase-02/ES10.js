/* 
String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.
Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.
*/

// String.trim()
// Remueve los caracteres en blanco al principio y al final de la palabra
const cadena = "              Hola       ";
console.log(cadena);
console.log(cadena.length);

console.log(cadena.trim());
console.log(cadena.trim().length);

// trim no quita los espacios en el medio de dos palabras
const cadena2 = "Hola             Mundo";
console.log(cadena2);
console.log(cadena2.length);

console.log(cadena2.trim());
console.log(cadena2.trim().length);

// Array flat
const array = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10]];
console.log(array.length);
console.log(array);

console.log(array.flat()); // Por defecto aplana 1 solo nivel de array

// Aplanando mas de un nivel de array
const array2 = [1, 2, 3, 4, [5, [6, 7]], [8, 9, 10]];
console.log(array2.length);
console.log(array2);

console.log(array2.flat(2)); // Por parámetros pasamos hasta que nivel de array queremos aplanar