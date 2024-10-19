class Person {
  // El constructor es el método (función) que se ejecuta al instanciar una clase
  #name;
  constructor(name, lastName, age) {
    /* 
    Los atributos de la clase son variables internas, que se le puede asignar un valor inicial por defecto o 
    asignarle un valor al momento de instanciar una clase, se le antepone la palabra this para determinar que 
    la variable que pertenece a la clase.
    */
    this.#name = name;
    this.lastName = lastName;
    this.age = age;
    this.active = true;
  }

  static specie = "Humano";

  showPerson() {
    console.log(`El nombre de la persona es ${this.name} ${this.lastName} y tiene la edad de ${this.age} años`);
  }

  changeStatus() {
    this.active = !this.active;
  }

  // Setter
  changeName(name) {
    this.name = name;
  }

  // Getter
  getName() {
    console.log(this.#name);
  }
  /* 
Las propiedades estáticas están asociadas a la clase y no al objeto que se instancia, 
por lo tanto podemos acceder y modificar las propiedades estáticas sin la necesidad 
de instanciar una clase.
*/
  static showAttributes() {
    console.log("Los atributos de la clase Person son name, lastName y age");
  }
}

const miguel = new Person("Miguel", "Diaz", 22);
console.log(miguel);
miguel.getName();
// miguel.changeName("Juan")
console.log(miguel);

const jose = new Person("Jose", "Chavez", 40);
console.log(jose);

console.log(Person.specie);
Person.showAttributes();
