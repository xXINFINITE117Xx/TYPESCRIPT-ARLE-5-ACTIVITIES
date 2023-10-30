/*3. Crear una clase Vehículo con subclases Coche, Barco y Avión. Cada subclase implementa su propio método
desplazarse (). Crear objetos de las subclases y probar sus métodos.*/

class Vehiculo {
    constructor() {}
  
    desplazarse() {
      console.log("El vehículo se está desplazando.");
    }
  }
  
  class Coche extends Vehiculo {
    constructor() {
      super();
    }
  
    desplazarse() {
      console.log("El coche se está desplazando por la carretera.");
    }
  }
  
  class Barco extends Vehiculo {
    constructor() {
      super();
    }
  
    desplazarse() {
      console.log("El barco se está desplazando por el agua.");
    }
  }
  
  class Avion extends Vehiculo {
    constructor() {
      super();
    }
  
    desplazarse() {
      console.log("El avión se está desplazando por el aire.");
    }
  }
  

  const coche = new Coche();
  const barco = new Barco();
  const avion = new Avion();
  

  coche.desplazarse(); 
  barco.desplazarse(); 
  avion.desplazarse(); 
  