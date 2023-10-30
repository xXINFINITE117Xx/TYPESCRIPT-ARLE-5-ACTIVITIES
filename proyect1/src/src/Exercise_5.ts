/*5. Crear una clase Electrodoméstico con subclases Televisor, Nevera y Lavadora. Cada electrodoméstico tiene
propiedades como precio y color. Crear algunos objetos y probar.*/

class Electrodomestico {
    precio: number;
    color: string;
  
    constructor(precio: number, color: string) {
      this.precio = precio;
      this.color = color;
    }
  }
  
  class Televisor extends Electrodomestico {
    tamañoPantalla: number;
  
    constructor(precio: number, color: string, tamañoPantalla: number) {
      super(precio, color);
      this.tamañoPantalla = tamañoPantalla;
    }
  }
  
  class Nevera extends Electrodomestico {
    capacidadLitros: number;
  
    constructor(precio: number, color: string, capacidadLitros: number) {
      super(precio, color);
      this.capacidadLitros = capacidadLitros;
    }
  }
  
  class Lavadora extends Electrodomestico {
    capacidadKilos: number;
  
    constructor(precio: number, color: string, capacidadKilos: number) {
      super(precio, color);
      this.capacidadKilos = capacidadKilos;
    }
  }
  

  const televisor = new Televisor(500, 'Negro', 55);
  const nevera = new Nevera(800, 'Azul', 350);
  const lavadora = new Lavadora(600, 'Gris', 8);
  
  console.log(`Televisor: Precio - $${televisor.precio}, Color - ${televisor.color}, Tamaño - ${televisor.tamañoPantalla} pulgadas`);
  console.log(`Nevera: Precio - $${nevera.precio}, Color - ${nevera.color}, Capacidad - ${nevera.capacidadLitros} litros`);
  console.log(`Lavadora: Precio - $${lavadora.precio}, Color - ${lavadora.color}, Capacidad - ${lavadora.capacidadKilos} kilos`);
  