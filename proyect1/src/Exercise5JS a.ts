
interface Cuenta {
    numero: string;
    saldo: number;
  }
  

  interface Customer {
    documento: string;
    pin: string;
    cuentas: Cuenta[];
  }
  

  class CajeroAutomatico {
    private encendido: boolean = false;
    private CustomerActual: Customer | null = null;
  
    public encender(): void {
      this.encendido = true;
      console.log('Cajero automático encendido');
    }
  
    public apagar(): void {
      this.encendido = false;
      console.log('Cajero automático apagado');
    }
  
    public validarPin(Customer: Customer): boolean {
      let intentos = 0;
      while (intentos < 3) {
        const pinIngresado = prompt('Ingrese su PIN: ');
        if (pinIngresado === Customer.pin) {
          return true;
        }
        console.log('PIN incorrecto. Por favor, intente de nuevo.');
        intentos++;
      }
      return false;
    }
  
    public realizarRetiro(Customer: Customer, monto: number): void {
      const cuenta = this.seleccionarCuenta(Customer);
      if (cuenta && cuenta.saldo >= monto && monto % 50000 === 0) {
        cuenta.saldo -= monto;
        console.log(`Retiro exitoso. Puede tomar $${monto} de la bandeja principal.`);
      } else {
        console.log('No se pudo realizar el retiro. Verifique el monto o la disponibilidad de fondos.');
      }
    }
  
    public realizarDeposito(Customer: Customer, monto: number, esEfectivo: boolean): void {
      const cuenta = this.seleccionarCuenta(Customer);
      if (cuenta) {
        if (esEfectivo) {
          cuenta.saldo += monto;
          console.log(`Depósito de efectivo exitoso. Nuevo saldo: $${cuenta.saldo}`);
        } else {
          console.log('Depósitos con cheques no están disponibles en este cajero automático.');
        }
      }
    }
  
    public realizarTransferencia(Customer: Customer, origen: string, destino: string, monto: number): void {
      const cuentaOrigen = Customer.cuentas.find(cuenta => cuenta.numero === origen);
      const cuentaDestino = Customer.cuentas.find(cuenta => cuenta.numero === destino);
  
      if (cuentaOrigen && cuentaDestino && cuentaOrigen.saldo >= monto) {
        cuentaOrigen.saldo -= monto;
        cuentaDestino.saldo += monto;
        console.log(`Transferencia exitosa de $${monto} de la cuenta ${origen} a la cuenta ${destino}.`);
      } else {
        console.log('No se pudo realizar la transferencia. Verifique los datos o la disponibilidad de fondos.');
      }
    }
  
    public consultarSaldo(Customer: Customer): void {
      const cuenta = this.seleccionarCuenta(Customer);
      if (cuenta) {
        console.log(`Saldo actual de la cuenta ${cuenta.numero}: $${cuenta.saldo}`);
      }
    }
  
    private seleccionarCuenta(Customer: Customer): Cuenta | undefined {
      if (Customer.cuentas.length === 1) {
        return Customer.cuentas[0];
      } else {
        const numeroCuenta = prompt('Ingrese el número de cuenta: ');
        return Customer.cuentas.find(cuenta => cuenta.numero === numeroCuenta);
      }
    }
  
    public atenderCustomer(Customer: Customer): void {
      if (this.encendido) {
        this.CustomerActual = Customer;
        if (this.validarPin(Customer)) {
          console.log('Bienvenido. Seleccione una opción:');
          console.log('1. Retiro de efectivo');
          console.log('2. Depósito de efectivo');
          console.log('3. Transferencia de dinero');
          console.log('4. Consulta de saldo');
          console.log('5. Salir');
  
          const opcion = parseInt(prompt('Ingrese el número de la opción deseada: ') || '0', 10);
  
          switch (opcion) {
            case 1:
              const montoRetiro = parseInt(prompt('Ingrese el monto a retirar (múltiplos de $50000): ') || '0', 10);
              this.realizarRetiro(Customer, montoRetiro);
              break;
            case 2:
              const montoDeposito = parseInt(prompt('Ingrese el monto a depositar: ') || '0', 10);
              const esEfectivo = confirm('¿Es un depósito de efectivo?');
              this.realizarDeposito(Customer, montoDeposito, esEfectivo);
              break;
            case 3:
              const cuentaOrigen = prompt('Ingrese el número de cuenta de origen: ');
              const cuentaDestino = prompt('Ingrese el número de cuenta de destino: ');
              const montoTransferencia = parseInt(prompt('Ingrese el monto a transferir: ') || '0', 10);
              this.realizarTransferencia(Customer, cuentaOrigen, cuentaDestino, montoTransferencia);
              break;
            case 4:
              this.consultarSaldo(Customer);
              break;
            case 5:
              console.log('Gracias por usar nuestro cajero automático. Hasta luego.');
              this.CustomerActual = null;
              break;
            default:
              console.log('Opción no válida. Por favor, seleccione una opción válida.');
              break;
          }
        } else {
          console.log('PIN incorrecto. Ha excedido el número máximo de intentos.');
          this.CustomerActual = null;
        }
      } else {
        console.log('El cajero automático está apagado. Enciéndalo para continuar.');
      }
    }
  }
  
  
  
  const cuenta1: Cuenta = { numero: '123456789', saldo: 1000000 };
  const cuenta2: Cuenta = { numero: '987654321', saldo: 500000 };
  
  const Customer1: Customer = { documento: '123456789', pin: '1234', cuentas: [cuenta1] };
  const Customer2: Customer = { documento: '987654321', pin: '5678', cuentas: [cuenta2] };
  
  const cajero = new CajeroAutomatico();
  cajero.encender();
  

  cajero.atenderCustomer(Customer1);
  

  cajero.atenderCustomer(Customer2);
  