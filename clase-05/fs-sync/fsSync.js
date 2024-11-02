// Importar el módulo de fs 
import fs from "fs";

/* 
Las principales operaciones que podemos hacer con fs síncrono son:
writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
readFileSync = Para obtener el contenido de un archivo.
appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
existsSync = Corrobora que un archivo exista!
*/

const filePath = "./test.txt";

// Crear un archivo de texto 
fs.writeFileSync(filePath, "1 - Este es un texto de prueba");

// Chequear si existe el archivo
if(fs.existsSync(filePath)){
  // En caso de que el archivo exista 

  // Leer rel archivo 
  let mensaje = fs.readFileSync(filePath, "utf-8");// utf-8 es el tipo de codificación que usamos para leer el archivo
  console.log(`Mensaje: ${mensaje}`);
  
  // Modificar el archivo, agregando texto 
  fs.appendFileSync(filePath, "\n2 - Este es otro mensaje");
  mensaje = fs.readFileSync(filePath, "utf-8");
  console.log(mensaje);

  //Eliminar el archivo
  fs.unlinkSync(filePath);
}