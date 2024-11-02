// Utilizar la librería instalada de manera clásica
const moment = require("moment");

const hoy = moment();

console.log(`Fecha de hoy es: ${hoy}`);
console.log(hoy.format("MMMM Do YYYY, h:mm a"));
console.log(moment("1991-11-10", "YYYY-MM-DD"));

// Calcular los días que pasaron desde una determinada fecha a hoy
console.log(hoy.diff( moment("2000-1-1", "YYYY-MM-DD" ), "years" ));
console.log(hoy.diff( moment("2000-1-1", "YYYY-MM-DD" ), "months" ));
console.log(hoy.diff( moment("2000-1-1", "YYYY-MM-DD" ), "days" ));

