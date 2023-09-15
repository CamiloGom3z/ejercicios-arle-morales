let user = parseInt(prompt("1.lavado 2.planchado"));
let prendas = parseInt(prompt("cantidad de prendas "));
let planchado = 1800;
let precioSeco = 2000;
let precioNormal = 1500;
let domiclio = 3000;
function planchar() {
    if (user == 1) {
        let eleccion = parseInt(prompt("1.lavado seco 2.lavado normal"))
        if (user == 1) {
            alert(`el costo de este lavado sera ${precioSeco * prendas}`)
        } else if (user == 2) {
            alert(`el costo de este lavado será ${precioNormal * prendas}`)
        }
    }
    if (user == 2) {
        alert((`el usuario eligio planchado el costo sera de ${prendas * planchado + domiclio} domicilio incluido que es de ${domiclio} `))
    }
} planchar();
