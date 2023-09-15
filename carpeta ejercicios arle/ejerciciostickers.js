
function eleccionTamaño() {
    let usuario = parseInt(prompt("desea que sus sticker sean : 1.pequeños 2. grandes"))
    let cantstickers = parseInt(prompt("elija la cantidad de stickers"))
    let Pequeño = 4000;
    let grande = 6000;
        if (cantstickers >= 10) {
        if (usuario > 2) {
            alert("eija opcion correcta entre 1 y 2")
        } else if (usuario == 1) {
            alert(`el valor de stciker pequeño es ${Pequeño} el valor total de su compra es de ${cantstickers * Pequeño}`)
        } else if (usuario == 2) {
            alert(`el valor de sticker grande es de  ${grande} y el valor total de su compra es de ${cantstickers * grande}`)
        } else {
            alert("elija la cantidad minima")
        } return usuario
    }
}
eleccionTamaño()