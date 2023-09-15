// • Desarrollar en JavaScript un programa para la gestión reservas de un hotel, 
// el cual, debe tener las siguientes características y consideraciones:
// • Un cliente puede reservar cualquier tipo de habitación: individual, doble y 
// familiar.
// • Las habitaciones pueden ser para fumadores o no fumadores.
// • Las mascotas solo se aceptan en habitaciones familiares.
// • El hotel cuenta con 3 habitaciones de cada tipo.

// • No se puede exceder el número de personas por habitación: individual 2 
// personas, 4 personas para doble y 6 personas para familiar.
// • El hotel necesita una estadística de las reservas: nombre de quien reserva, 
// país de origen, número de personas, el periodo de la estadía, número de 
// // personas que están ocupando el hotel y si el huésped trajo mascota.

// 1.preguntar al cliente tipo dehabitacion
// 2preguntar si fuma o no fuma
// 3 si tiene mascota


let tipos={
    individual: 1,
    doble: 2,
    familiar:3
}
let habitaciones={
    individual: 2,
    doble: 4,
    familiar:6
}

class Cliente {
    constructor(nombre, origen, tipoHabitacion, cantpersonas, fuma, mascota) {
      this.nombre = nombre;
      this.origen = origen;
      this.tipoHabitacion = tipoHabitacion;
      this.cantpersonas = cantpersonas;
      this.fuma = fuma;
      this.mascota = mascota;
  }}

  let cliente1 = new Cliente ("camilo","chamo",1,2,"s","n");

  var clientes=[];
  clientes.push(cliente1);

  function stadistics(){
    let cantPersonas = 0;
    array.forEach(cliente => {
        ///
        cantPersonas = cantPersonas+cliente.cantpersonas;
    });
    console.log("La cantidad de personas en el hotel es de " + cantPersonas);
  }

function principal() {
let ciente = new Cliente();    
let nameUser = prompt("nombre completo");
cliente.nombre = nameUser;
let  paisOrigen = prompt("pais de origen"); 
cliente.origen = paisOrigen;
let tipoHabitacion = Number(prompt("que habitacion desea 1,2,3"));
ciente.tipoHabitacion = tipoHabitacion;
let fumador = prompt("fuma o no fuma(s-n)");
cliente.fuma = fumador;
let mascota = prompt("tiene mascota(s-n)");
cliente.mascota = mascota;
let numPersonas = Number(prompt("escriba la cantidad de personas"));
cliente.cantpersonas = numPersonas;

if (mascota == "s" && tipoHabitacion == tipos.familiar) {
console.log("bienvenido a habitacion familiar ");
} else {
    console.log("no se aceptan mascotas en estas habitaciones");
}
if((tipoHabitacion == tipos.individual
     && numPersonas > habitaciones.individual) || 
     (tipoHabitacion == tipos.doble
        && numPersonas > habitaciones.doble) ||
       (tipoHabitacion == tipos.familiar 
        && numPersonas > habitaciones.familiar) ){
    console.log("cantidad de personas mayor a la habitacion");
    return;
}
 ///

clientes.push(cliente);

}
