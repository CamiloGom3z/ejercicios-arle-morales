// let i = 0;
// function count() {
// while (i <= 10) {
//     console.log(i)
//     i += 1
// }
// } count()



// function quit() {
//     let index = 0;
//     while (index <= 6 ) {
//         if (index != 5){
//         console.log(index)
//         index += 1;
//         }
//     }

// } quit()


// let costo = 100000;
// let mueble = true;

// function calcular() {
//     if ( mueble == true){
//         mueble = costo % 0.10
//         console.log(`se le aplicó ${mueble} el propietario recibe ${mueble - costo}`);
//     }  else {
//         mueble = costo % 0.12
//         console.log(`se le aplicó ${mueble} el propietario recibe ${mueble - costo}`);
//     }

// }
// calcular()

let costoCasa = (parseInt(prompt("ingrese costo de la casa")));
let estado = (parseInt(prompt("1. nuevo 2. usado")));

function calcular() {
    let comision = 0;
    if (estado == 1) {
        comision += costoCasa * 0.10
    } else {
        comision += costoCasa * 0.12
    } return (comision)
}
function mensaje() {
    let mensajes = "";
    if (estado == 1) {
        mensajes += `el propietario recibe ${costoCasa - comision} y la inmobiliaria recibe ${comision}`

    } else (estado == 2)
    {
        mensajes += `el propietario recibe ${costoCasa - comision} y la inmobiliaria recibe ${comision}`
    } alert(mensajes)

}
let comision = calcular();
mensaje((comision));








