// Ejercicio 2:
// Desarrollar en JavaScript un programa para la gestión reservas de un hotel, el cual, debe tener las
// siguientes características y consideraciones:
// 1. Un cliente puede reservar cualquier tipo de habitación: individual, doble y familiar.
// 2. Las habitaciones pueden ser para fumadores o no fumadores.
// 3. Las mascotas solo se aceptan en habitaciones familiares.
// 4. El hotel cuenta con 3 habitaciones de cada tipo.
// 5. No se puede exceder el número de personas por habitación: individual 2 personas, 4 personas para
// doble y 6 personas para familiar.
// 6. El hotel necesita una estadística de las reservas: nombre de quien reserva, país de origen, número de
// personas, el periodo de la estadía, número de personas que están ocupando el hotel y si el huésped trajo
// mascota

let habitación = {
  individual: {
    cantHabitaciones: 3,
    cantPersona: 2,
    fumadores: true,
    mascota: true,
  },
  doble: {
    cantHabitaciones: 3,
    cantPersona: 4,
    fumadores: true,
    mascota: false,
  },
  familiar: {
    cantHabitaciones: 3,
    cantPersona: 6,
    fumadores: false,
    mascota: true,
  },
};

let usuario = Number((prompt(
  "bienvenido desea reservar tipo de habitacion 1.individual,2.doble,3.familiar"
)));
let mascota = Number(prompt("trae usted mascota? 1. si  2. no"));


function tipoReserva() {
  if(usuario == 1){
    alert("usted ha elejido tipo individual");
    let cantPersona = Number(prompt("cantidad de personas?"))
    if(cantPersona == 2 && mascota == 1){
      alert("bienvenido, por favor estar muy pendiente de su mascota");
      
      } else if (cantPersona > 2 ){
        alert("solo se aceptan 2 personas en este tipo de habitacion");
      }
      else{
        alert("bienvenido, ingrese sus datos por favor ");
      }
    
  }  if(usuario == 2){
    alert("usted ha elejido tipo doble");
    let cantPersona = Number(prompt("cantidad de personas?"))
    if(cantPersona == 4 && mascota == 1){
      alert("bienvenido, pero lastimosante en esta habitacion no se aceptan mascotas");
      
      } else if (cantPersona > 4 ){
        alert("solo se aceptan 2 personas en este tipo de habitacion");
      }
      else{
        alert("bienvenido, ingrese sus datos por favor ");
      }
    
  } if(usuario == 3){
    alert("usted ha elejido tipo familiar");
    let cantPersona = Number(prompt("cantidad de personas?"))
    if(cantPersona == 6 && mascota == 1){
      alert("bienvenido, por favor estar pendiente de su mascota");
      
      } else if (cantPersona > 6 ){
        alert("solo se aceptan 6 personas en este tipo de habitacion");
      }
      else{
        alert("bienvenido, ingrese sus datos por favor ");
      }
    
  }
  
  
}
tipoReserva()

// El hotel necesita una estadística de las reservas: nombre de quien reserva, 
// país de origen, número de personas, el periodo de la estadía, número de 
// personas que están ocupando el hotel y si el huésped trajo mascota.


 var estadisticas = {
  nombre: "",
  paisOrigen: "",
  tiempoEstadia:"",
  numeroPersonas:cantPersona,
  trajoMascota:mascota
 }





































































// function reservacionIndividual(usuario) {
//   if (usuario == "individual") {
//     let ingresopersonas = Number(prompt("ingrese la cantidad de personas "));
//    if (ingresopersonas > usuario.individual.cantPersona) {
//       alert("señor usuario el maximo de personas son 2");
//     } else {
//       alert(
//         "bienvenido señor usuario por favor ingrese sus datos para cotinuar con la reserva"
//       );
//     }
//   }
// }
//   function reservaDoble(usuario) {
//   if (usuario == "doble") {
//     let ingresopersonas = Number(prompt("ingrese la cantidad de personas "));
//     if (ingresopersonas > usuario.doble.cantPersona && mascota == true) {
//       alert(
//         "señor usuario el maximo de personas son 4 y no se aceptan mascotas en este tipo de habitacion "
//       );
//     } else {
//       alert(
//         "bienvenido señor usuario por favor ingrese sus datos para cotininuar con la reserva"
//       );
//     }
//   }
// }
// function reservaFamilia(usuario) {
//   if (usuario == "familiar") {
//     let ingresopersonas = Number(prompt("ingrese la cantidad de personas "));
//     if (ingresopersonas > usuario.familiar.cantPersona && fumadores == 1) {
//       alert(
//         "cantidad minima de personas 6 y no se aceptan fumadores en este tipo de habitacion"
//       );
//     } else {
//       alert(
//         "bienvenido señor usuario por favor ingrese sus datos para cotininuar con la reserva"
//       );
//     }
//   }
// }

// reservacion();
// reservaDoble();
// reservaFamilia();
