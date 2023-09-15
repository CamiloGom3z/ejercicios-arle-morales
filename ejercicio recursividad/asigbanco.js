const tiposClientes = ["preferencial", "general", "no_cuenta"];
const tiposAtencion = ["caja", "asesoria"];
const tiposRetiros = ["retiro", "deposito"];

// Lista de clientes
const clientes = [
  {
    id: 1,
    tipo: "preferencial",
    tipoAtencion: "caja",
    tipoRetiro: "retiro",
  },
  {
    id: 2,
    tipo: "general",
    tipoAtencion: "caja",
    tipoRetiro: "deposito",
  },
  {
    id: 3,
    tipo: "no_cuenta",
    tipoAtencion: "asesoria",
  },
];

// Lista de cajas
const cajas = [
  {
    id: 1,
    tipo: "caja",
    tipoAtencion: "retiro",
    disponible: true,
  },
  {
    id: 2,
    tipo: "caja",
    tipoAtencion: "retiro",
    disponible: true,
  },
  {
    id: 3,
    tipo: "caja",
    tipoAtencion: "caja",
    disponible: true,
  },
  {
    id: 4,
    tipo: "caja",
    tipoAtencion: "caja",
    disponible: true,
  },
  {
    id: 5,
    tipo: "caja",
    tipoAtencion: "asesoria",
    disponible: true,
  },
];

// Función para asignar un turno a un cliente
function asignarTurno(cliente) {
  // Comprobamos si el cliente es presencial
  if (cliente.tipo === "preferencial" || cliente.tipo === "general") {
    // Asignamos un turno en la primera caja disponible
    for (const caja of cajas) {
      if (caja.disponible) {
        caja.disponible = false;
        cliente.turno = caja.id;
        return cliente;
      }
    }
  } else {
    // Asignamos un turno en la caja de asesoría
    for (const caja of cajas) {
      if (caja.id === 5 && caja.disponible) {
        caja.disponible = false;
        cliente.turno = caja.id;
        return cliente;
      }
    }
  }

  // Si no hay cajas disponibles, devolvemos el cliente sin asignar un turno
  return cliente;
}

// Función para atender un cliente
function atenderCliente(cliente) {
  // Simulamos el tiempo de atención
  const tiempoAtencion = Math.floor(Math.random() * 10) + 1;

  // Actualizamos el estado de la caja
  const caja = cajas.find((c) => c.id === cliente.turno);
  caja.disponible = true;

  // Simulamos el tiempo de espera
  const tiempoEspera = tiempoAtencion * 60;

  // Devolvemos el cliente con la información de atención
  return {
    ...cliente,
    tiempoAtencion,
    tiempoEspera,
  };
}

// Simulamos la atención de todos los clientes
const clientesAtendidos = clientes.map((cliente) => asignarTurno(cliente));
const clientesAtendidosConInformacion = clientesAtendidos.map((cliente) => atenderCliente(cliente));

// Mostramos la información de atención de los clientes
console.log(clientesAtendidosConInformacion);
