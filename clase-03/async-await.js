/* 
Cuando necesitamos más que sólo una operación para poder ejecutar algo asíncrono, no basta con el uso de 
una promesa solamente, sino que necesitamos un entorno completo para poder ejecutar dichas operaciones .then 
en este caso sólo nos sirve para encadenar las promesas y obtener sus resultados, pero no nos permite un 
entorno completo asíncrono para trabajar, por lo cual nos obliga a trabajar TODO dentro de ese scope
Además, el principal problema de los .then y .catch son su encapsulamiento excesivo, impidiendo o limitando 
que podamos acceder a los recursos de algunos resultados, variables, etc.

Surge entonces en Javascript el soporte para Async - Await, unas palabras reservadas que, trabajando juntas, 
permiten gestionar un entorno asíncrono, resolviendo las limitantes del .then y .catch
- async se colocará al inicio de una función, indicando que todo el cuerpo de esa función deberá 
ejecutarse de manera asíncrona
- await servirá (como indica su nombre) para esperar por el resultado de la promesa y extraer su resultado.
Al ser operaciones que podrían salir bien, PERO TAMBIÉN MAL, es importante encerrar el cuerpo en un 
bloque try {} catch {}
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

const multiplicar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Solo se admiten números positivos");
    } else if (a * b < 0) {
      reject("La calculadora solo debe devolver números positivos");
    } else {
      resolve(a * b);
    }
  });
};

const suma = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a + b === 0) {
      reject("Operación innecesaria");
    } else if (a + b < 0) {
      reject("La calculadora solo debe devolver números positivos");
    } else {
      resolve(a + b);
    }
  });
};

const resta = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a - b === 0) {
      reject("Operación inválida");
    } else if (a - b < 0) {
      reject("La calculadora solo debe devolver números positivos");
    } else {
      resolve(a - b);
    }
  });
};

const calculo = async (operacion, a, b) => {
  try {
    switch (operacion) {
      case "suma":
        const resultSuma = await suma(a, b);
        console.log(resultSuma);
        break;
      case "resta":
        const resultResta = await resta(a, b);
        console.log(resultResta);
        break;
      case "dividir":
        const resultDividir = await dividir(a, b);
        console.log(resultDividir);
        break;
      case "multiplicar":
        const resultMultiplica = await multiplicar(a, b);
        console.log(resultMultiplica);
        break;

      default:
        console.log("Operación desconocida");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

calculo("suma", 20, 5);
calculo("resta", 5, 20);
calculo("dividir", 20, 0);
calculo("multiplicar", 20, 5);