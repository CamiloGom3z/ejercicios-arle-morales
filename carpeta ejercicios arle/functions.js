
// simulacion maq. expendedora de dulces validar 1. solo monedas 2.si alcanza el dinero 3. dulce respectivo

const peticion = () => {
    let chocolatina = 700;
    let lecherita = 1000;
    let chocorramo = 1600;
    let monedasUsuario = Number(prompt("ingrese sus monedas"))
    let usuario = Number(prompt("marque 1. chocolatina 2.lecherita 3.chocorramo"))
    if (usuario == 1) {
        alert("elijio chocolatina el costo es de 700")
        if (monedasUsuario < chocolatina) {
            alert("saldo insuficiente")
        } else if (usuario == 1 && monedasUsuario > chocolatina) {
            alert(`reciba su cambio de ${monedasUsuario - chocolatina
                }`)
        } else if (monedasUsuario == chocolatina) {
            alert(`compra realizada`)
        }
    } else if (usuario == 2) {
        alert("elijio lecherita el costo es de 1000")
        if (monedasUsuario < lecherita) {
            alert("saldo insuficiente")
        } else if (usuario == 2 && monedasUsuario > lecherita) {
            alert(`reciba su cambio de ${monedasUsuario - lecherita
                }`)
        } else if (monedasUsuario == lecherita) {
            alert(`compra realizada`)
        }
    } else if (usuario == 3) {
        alert("elijio chocorramo el costo es de 1600")
        if (monedasUsuario < chocorramo) {
            alert("saldo insuficiente")
        } else if (usuario == 3 && monedasUsuario > chocorramo) {
            alert(`compra realizada reciba su cambio de ${monedasUsuario - chocorramo
                }`)
        } else if (monedasUsuario == chocorramo) {
            alert(`compra realizada`)
        }

    }
    else {
        alert("ingrese un numero correcto para el dulce que desea")
        return 
    }
}
peticion(onclick);

