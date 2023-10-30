/*4. Crear una clase FiguraGeometrica y subclases Triángulo, Círculo y Cuadrado. Implementar el método area() en
cada subclase. Crear objetos y calcular sus áreas.*/

class FiguraGeometrica {
    constructor() {}
  
    area() {
      return 0;
    }
  }
  
  class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    area() {
      return (this.base * this.altura) / 2;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    radio: number;
  
    constructor(radio: number) {
      super();
      this.radio = radio;
    }
  
    area() {
      return Math.PI * Math.pow(this.radio, 2);
    }
  }
  
  class Cuadrado extends FiguraGeometrica {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    area() {
      return Math.pow(this.lado, 2);
    }
  }
  

  const triangulo = new Triangulo(4, 5);
  const circulo = new Circulo(3);
  const cuadrado = new Cuadrado(6);
  
  const areaTriangulo = triangulo.area();
  const areaCirculo = circulo.area();
  const areaCuadrado = cuadrado.area();
  
  console.log(`Área del triángulo: ${areaTriangulo}`);
  console.log(`Área del círculo: ${areaCirculo}`);
  console.log(`Área del cuadrado: ${areaCuadrado}`);
  