
function seleccion() {
    var menu = window.document.getElementById("menu pizzeria");
    var opcionSeleccionada = menu.options[menu.selectedIndex].value;
    let pizza = 7000;
    let sandwich = 5000;
    let ensalada = 15000;
    let salsa = prompt("desea agregar salsa? costo $3000")
    if (opcionSeleccionada == "pizza" && salsa === "si") {
        let cantidadPorciones = parseInt(prompt("elija la cantidad de porciones"))
        salsa = 3000;
        let totalPizza = alert(`el precio total de su compra es ${(cantidadPorciones * pizza)+salsa}`)
    } else if (opcionSeleccionada == "sandwich"){
        let cantidadPorciones = parseInt(prompt("elija la cantidad de porciones"))
        let totalSandwich = alert(`el precio total de su compra es ${cantidadPorciones * sandwich}`)
    } else if (opcionSeleccionada == "ensalada") {
        let cantidadPorciones = parseInt(prompt("elija la cantidad de porciones"))
        let totalEnsalada = alert(`el precio total de su compra es de ${cantidadPorciones * ensalada}`)
    }

} seleccion()