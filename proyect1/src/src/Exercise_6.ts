/*6. Crear una clase Hotel con propiedades como nombre y ubicación. Crear clase Habitación con número de
habitación, precio y estado. Agregar métodos para reservar y liberar habitación. Probar con algunos hoteles e
interacciones*/

class Habitacion {
    numero: number;
    precio: number;
    estado: string;
  
    constructor(numero: number, precio: number) {
      this.numero = numero;
      this.precio = precio;
      this.estado = 'Disponible';
    }
  
    reservar() {
      if (this.estado === 'Disponible') {
        this.estado = 'Reservada';
        console.log(`La habitación ${this.numero} ha sido reservada.`);
      } else {
        console.log(`La habitación ${this.numero} no está disponible para reserva.`);
      }
    }
  
    liberar() {
      if (this.estado === 'Reservada') {
        this.estado = 'Disponible';
        console.log(`La habitación ${this.numero} ha sido liberada.`);
      } else {
        console.log(`La habitación ${this.numero} no está reservada.`);
      }
    }
  }
  
  class Hotel {
    nombre: string;
    ubicacion: string;
    habitaciones: Habitacion[];
  
    constructor(nombre: string, ubicacion: string) {
      this.nombre = nombre;
      this.ubicacion = ubicacion;
      this.habitaciones = [];
    }
  
    agregarHabitacion(habitacion: Habitacion) {
      this.habitaciones.push(habitacion);
    }
  
    listarHabitaciones() {
      console.log(`Habitaciones del ${this.nombre} en ${this.ubicacion}:`);
      this.habitaciones.forEach(habitacion => {
        console.log(`Número: ${habitacion.numero}, Precio: $${habitacion.precio}, Estado: ${habitacion.estado}`);
      });
    }
  }
  

  const habitacion1 = new Habitacion(101, 100);
  const habitacion2 = new Habitacion(102, 120);
  

  const hotel1 = new Hotel('Hotel A', 'Ciudad A');
  hotel1.agregarHabitacion(habitacion1);
  hotel1.agregarHabitacion(habitacion2);
  

  hotel1.listarHabitaciones();
  

  habitacion1.reservar(); 
  habitacion2.reservar(); 
  habitacion1.reservar(); 
  habitacion1.liberar();  
  habitacion2.liberar();  
  
  
  hotel1.listarHabitaciones();
  