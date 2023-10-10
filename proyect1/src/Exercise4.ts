class Habitacion {
    constructor(
      public tipo: string,
      public fumador: boolean,
      public capacidadMaxima: number,
      public precioNoche: number
    ) {}
  }
  
  class Reserva {
    constructor(
      public cliente: string,
      public paisOrigen: string,
      public numPersonas: number,
      public fechaEntrada: Date,
      public fechaSalida: Date,
      public mascota: boolean
    ) {}
  }
  
  class Hotel {
    private habitaciones: Habitacion[] = [];
    private reservas: Reserva[] = [];
  
    constructor() {

      const tiposHabitaciones = ['Individual', 'Doble', 'Familiar'];
      const fumadores = [true, false];
  
      tiposHabitaciones.forEach(tipo => {
        fumadores.forEach(fumador => {
          let capacidad = tipo === 'Individual' ? 2 : tipo === 'Doble' ? 4 : 6;
          let precio = tipo === 'Individual' ? 100 : tipo === 'Doble' ? 150 : 200;
          this.habitaciones.push(new Habitacion(tipo, fumador, capacidad, precio));
        });
      });
    }
  
    public realizarReserva(reserva: Reserva): void {
      if (this.validarReserva(reserva)) {
        this.reservas.push(reserva);
        console.log('Reserva realizada con éxito.');
      } else {
        console.log('No se pudo realizar la reserva. Verifique los datos ingresados.');
      }
    }
  
    private validarReserva(reserva: Reserva): boolean {
      const habitacionAdecuada = this.habitaciones.find(
        hab =>
          hab.tipo.toLowerCase() === reserva.cliente.toLowerCase() &&
          hab.fumador === reserva.mascota
      );
  
      if (!habitacionAdecuada) return false;
  
      const periodo = reserva.fechaSalida.getTime() - reserva.fechaEntrada.getTime();
      const diasEstadia = Math.ceil(periodo / (1000 * 3600 * 24));
  
      return reserva.numPersonas <= habitacionAdecuada.capacidadMaxima && diasEstadia > 0;
    }
  
    public obtenerstatistics(): { totalReservas: number; totalHuespedes: number } {
      const totalReservas = this.reservas.length;
      const totalHuespedes = this.reservas.reduce((total, reserva) => total + reserva.numPersonas, 0);
  
      return { totalReservas, totalHuespedes };
    }
  }
  
  
  const hotel = new Hotel();
  
 
  const reserva1 = new Reserva('Juan', 'Argentina', 2, new Date('2023-11-01'), new Date('2023-11-05'), false);
  const reserva2 = new Reserva('María', 'España', 4, new Date('2023-11-03'), new Date('2023-11-07'), false);
  const reserva3 = new Reserva('Pedro', 'Francia', 3, new Date('2023-11-10'), new Date('2023-11-15'), false);
  const reserva4 = new Reserva('Ana', 'Alemania', 6, new Date('2023-11-05'), new Date('2023-11-10'), true);
  
  hotel.realizarReserva(reserva1);
  hotel.realizarReserva(reserva2);
  hotel.realizarReserva(reserva3);
  hotel.realizarReserva(reserva4);
  

  const statistics = hotel.obtenerstatistics();
  console.log('Estadísticas del hotel:', statistics);
  