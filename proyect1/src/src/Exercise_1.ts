/*1. Crear una clase Persona con propiedades como nombre, edad, documento identidad y métodos como caminar(),
hablar(), comer(). Crear algunos objetos Persona e interactuar con sus propiedades y métodos.*/

class Persona {
    nombre: string;
    edad: number;
    documento_id: string;
    
    constructor (nombre: string, edad: number, documento_id: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.documento_id = documento_id;
    }

    caminar() {
        console.log(`${this.nombre} está caminando.`);
    }
    hablar() {
        console.log(`${this.nombre} está hablando.`);
      }
    
    comer() {
        console.log(`${this.nombre} está comiendo.`);
    }
}

const Jose = new Persona ('Jose', 30, '1075489134');
const Logan = new Persona ('Logan', 20, '1074246683');

console.log(Jose.nombre); 
console.log(Logan.edad);   


Jose.caminar();     
Logan.hablar(); 