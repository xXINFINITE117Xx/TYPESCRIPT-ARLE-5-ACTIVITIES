type ClienteType = "preferencial" | "general" | "sin_cuenta";
type AtencionType = "caja" | "asesoria";


type CajaSubtipo = "deposito" | "retiro";


interface Cliente {
  tipo: ClienteType;
}


interface Atencion {
  tipo: AtencionType;
  subtipo?: CajaSubtipo;
}


interface Caja {
  numero: number;
  disponible: boolean;
  tipo: AtencionType;
  subtipo?: CajaSubtipo;
}


interface Banco {
  cajas: Caja[];
  colaClientes: Cliente[];
}


function asignarCajaDisponible(banco: Banco): Caja | undefined {
  return banco.cajas.find(caja => caja.disponible);
}

function atenderSiguienteCliente(banco: Banco): void {
  const siguienteCliente = banco.colaClientes.shift();
  if (siguienteCliente) {
    const cajaDisponible = asignarCajaDisponible(banco);
    if (cajaDisponible) {
      cajaDisponible.disponible = false;
      console.log(`Atendiendo ${siguienteCliente.tipo} en caja ${cajaDisponible.numero}`);
    } else {
      console.log(`No hay cajas disponibles para atender a ${siguienteCliente.tipo}`);
    }
  }
}


const banco: Banco = {
  cajas: [
    { numero: 1, disponible: false, tipo: "caja", subtipo: "retiro" },
    { numero: 2, disponible: false, tipo: "caja", subtipo: "retiro" },
    { numero: 3, disponible: true, tipo: "caja" },
    { numero: 4, disponible: true, tipo: "caja" },
    { numero: 5, disponible: true, tipo: "asesoria" },
  ],
  colaClientes: [
    { tipo: "preferencial" },
    { tipo: "general" },
    { tipo: "sin_cuenta" },
  ],
};

atenderSiguienteCliente(banco);
