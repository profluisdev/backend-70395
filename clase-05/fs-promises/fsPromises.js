
import fs from "fs";

/* 
fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
fs.promises.readFile  = Para obtener el contenido de un archivo.
fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.

*/

const filePath = "./test.txt";

const fetchDataFile = async () => {
  
  try {

    // Escribir un archivo
    await fs.promises.writeFile(filePath, "1 - Primer mensaje");

    // Leer el archivo
    let mensaje = await fs.promises.readFile(filePath, "utf-8");
    console.log(mensaje);
    
    // Agregar contenido al archivo
    await fs.promises.appendFile(filePath, "\n2 - Este es es segundo mensaje");
    
    mensaje = await fs.promises.readFile(filePath, "utf-8");
    console.log(mensaje);

    await fs.promises.unlink(filePath);
    
  } catch (error) {
    console.log(error);
  }

}

fetchDataFile();