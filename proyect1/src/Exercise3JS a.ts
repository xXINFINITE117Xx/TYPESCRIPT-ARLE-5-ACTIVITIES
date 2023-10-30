class Producto {
    constructor(
      public codigo: string,
      public descripcion: string,
      public precioCompra: number,
      public precioVenta: number,
      public cantidadBodega: number,
      public cantidadMinima: number,
      public cantidadMaxima: number,
      public porcentajeDescuento: number
    ) {}
  
    solicitarPedido(): boolean {
      return this.cantidadBodega < this.cantidadMinima;
    }
  
    calcularTotalPagar(cantidad: number): number {
      return cantidad * this.precioCompra;
    }
  }
  
  class PrendaVestir extends Producto {
    constructor(
      codigo: string,
      descripcion: string,
      precioCompra: number,
      precioVenta: number,
      cantidadBodega: number,
      cantidadMinima: number,
      cantidadMaxima: number,
      porcentajeDescuento: number,
      public talla: string,
      public permitePlanchado: boolean
    ) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
    }
  }
  
  class Calzado extends Producto {
    constructor(
      codigo: string,
      descripcion: string,
      precioCompra: number,
      precioVenta: number,
      cantidadBodega: number,
      cantidadMinima: number,
      cantidadMaxima: number,
      porcentajeDescuento: number,
      public talla: number
    ) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
    }
  }
  

  const prendas: PrendaVestir[] = [
    new PrendaVestir('PV001', 'Blusa de algodón', 20, 50, 10, 5, 50, 10, 'M', true),
    new PrendaVestir('PV002', 'Jeans clásicos', 30, 70, 8, 3, 40, 15, 'L', true),
  ];
  
 
  const calzados: Calzado[] = [
    new Calzado('CZ001', 'Zapatillas deportivas', 40, 90, 15, 8, 30, 12, 38),
    new Calzado('CZ002', 'Zapatos formales', 50, 120, 12, 5, 25, 15, 40),
  ];
  

  const numPrendas = prendas.length;
  const numCalzados = calzados.length;
  
  console.log(`Número de productos de prendas de vestir: ${numPrendas}`);
  console.log(`Número de productos de calzado: ${numCalzados}`);
  