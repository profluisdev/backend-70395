/* 
Es un objeto especial que nos permitirá encapsular una operación, la cual reaccionará a 
dos posibles situaciones dentro de una promesa:
¿Qué debería hacer si la promesa se cumple?
¿Qué debería hacer si la promesa no se cumple?
Al prometerse algo, es una promesa en estado pendiente (pending), no sabemos cuándo se resolverá esa promesa. 
Sin embargo, cuando llega el momento, se nos notifica si la promesa se cumplió (Fulfilled, también 
lo encontramos como Resolved) o tal vez, a pesar del tiempo, al final nos notifiquen que la promesa 
no pudo cumplirse, se rechazó (Rejected).
*/

const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      // Cuando no se cumple la promesa 
      reject("No se puede hacer divisiones entre 0");
    } else {
      // Cuando se cumple la promesa
      resolve(dividendo / divisor);
    }
  });
};

// Obtener la respuesta de las promesas con then y catch

dividir(9, 3)
  .then( response => console.log(response)) // Obtenemos el resolve
  .catch( error => console.log(error)); // Obtenemos el reject

