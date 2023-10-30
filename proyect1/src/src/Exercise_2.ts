/*2. Crear una clase CuentaBancaria con propiedades como número de cuenta, titular y saldo. Agregar métodos para
depositar, retirar y consultar saldo. Crear varias cuentas y probar los métodos.*/

class CuentaBancaria {
    numeroCuenta: string;
    titular: string;
    saldo: number;
  
    constructor(numeroCuenta: string, titular: string, saldoInicial: number) {
      this.numeroCuenta = numeroCuenta;
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(monto: number) {
      this.saldo += monto;
      console.log(`Se depositaron ${monto} unidades monetarias. Nuevo saldo: ${this.saldo}`);
    }
  
    retirar(monto: number) {
      if (monto <= this.saldo) {
        this.saldo -= monto;
        console.log(`Se retiraron ${monto} unidades monetarias. Nuevo saldo: ${this.saldo}`);
      } else {
        console.log(`Fondos insuficientes. Saldo actual: ${this.saldo}`);
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo actual: ${this.saldo}`);
    }
  }
  
 
  const cuenta1 = new CuentaBancaria('731588', 'Juan Pérez', 1000);
  const cuenta2 = new CuentaBancaria('478315', 'María García', 2000);
  const cuenta3 = new CuentaBancaria('621937', 'jorge Antonio', 1000);

  cuenta1.consultarSaldo(); 
  cuenta1.depositar(500);    
  cuenta1.retirar(200);      
  cuenta1.retirar(1500);    
  
  
  cuenta2.consultarSaldo(); 
  cuenta2.retirar(2500);     
  cuenta2.depositar(1500);
  cuenta2.retirar(100);


  cuenta3.consultarSaldo(); 
  cuenta3.retirar(2500);     
  cuenta3.depositar(1500);
  cuenta3.retirar(500);   