// let number = 4
// number > 5 ? console.log("uno") : console.log("dos");

// number > 2 ? 4:
// number > 0? 3:3



// let color = "amarillo"
//  color == "rojo" ? console.log("stop") : color == "amarrillo" ? console.log("keepIt"): color == "verde" ? console.log("go")





// let ocupacionCancha = true;
// let nombreCancha = "bernabeu";

//  let mensaje = ocupacionCancha ? `la cancha llamada ${nombreCancha} esta ocupada`: `la cancha llamada ${nombreCancha} esta disponible`;
//  console.log(mensaje);

let canchas = [
    {nombre: "bernaneu",
estado: true},
{nombre:"campnow",
estado:false},
{nombre:"sanjose",
estado:true},{
    nombre:"7 de agosto",
    estado: true}
]

let disponibilidad = canchas[1].estado ? `la cancha llamada ${canchas[1].name} esta ${canchas[1].estado}`: console.log("no esta disponible");

console.log(disponibilidad);



// let usuarios = [
//     {email:"art.123@gmailcom",contraseña:"12345"},
//     {email:"cans123@gmailcom",contraseña:"54321"},
//     {email:"loli123@gmail.com",contraseña:"camilo"}
// ]

// let validation = usuarios[1].email == "cans123@gmail.com" && usuarios[1].contraseña == "54321" ?
// console.log(hello);


