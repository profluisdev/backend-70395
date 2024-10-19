class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.contadorIndividual = 0;
  }

  static contador = 0;

  getResponsable() {
    console.log(`El responsable del contador es ${this.nombre}`);
  }

  contar(){
    // Aumentamos en 1 el contador global
    Contador.contador++;

    // Aumentar en 1 el contador individual
    this.contadorIndividual++;
  }

  getCuentaIndividual() {
    console.log(`El contador individual de ${this.nombre} es ${this.contadorIndividual}`);
  }

  getCuentaGlobal() {
    console.log(`El contador global es ${Contador.contador}`);
  }

}


const pepe = new Contador("Pepe");
pepe.contar();
pepe.contar();
pepe.contar();
pepe.getResponsable();
pepe.getCuentaIndividual();
pepe.getCuentaGlobal();

console.log("");
console.log("-------------------------------");
console.log("");

const juan = new Contador("Juan");
juan.contar();
juan.contar();
juan.contar();
juan.getResponsable();
juan.getCuentaIndividual();
juan.getCuentaGlobal();

console.log("");
console.log("-------------------------------");
console.log("");

const ana = new Contador("Ana");
ana.contar();
ana.contar();
ana.contar();
ana.contar();
ana.getResponsable();
ana.getCuentaIndividual();
ana.getCuentaGlobal();