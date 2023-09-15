/*7. La biblioteca municipal de Armenia, necesita un sistema de Gestión de multas. Hacer un programa en JavaScript 
que cumpla los siguientes requisitos o características (programa básico-simulación):
a. Se pregunta al usuario si es devolución o perdida.
b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
c. La cantidad de libros prestados o revistas
• Revistas 500 pesos día.
• Libro 600 pesos día.
d. Si es perdida, debe de pagar 10000 por ejempla*/ 


let user = parseInt(prompt("desea 1.devolver o si ha perdido su libro marque 2?"))

function informeFlecha() {
    
}
function informe() {
    let libroxdia = 500;
    let revistaxdia = 600; 
    let perdida = 10000;
    if(user == 1){
        let libroOrevista = parseInt(prompt("1. libro 2. revista"))
        let pregunta = parseInt(prompt("cuantos dias de retraso tiene lo que llevo?"))
        if(libroOrevista == 1){
        let cant = parseInt(prompt("cuantos libros llevo?"))
        alert(`teniendo en cuenta la cantidad de libros que se llevo y los dias deberá pagar ${(libroxdia * pregunta)*cant}`)
        } else {
        let libroOrevista = parseInt(prompt("1. libro 2. revista"))
        if(libroOrevista == 2){
        
        let cant = parseInt(prompt("cuantas revistas llevo?"))
        alert(`teniendo en cuenta la cantidad de revistas que se llevo y los dias deberá pagar ${(revistaxdia * pregunta)*cant}`)
        }  
    }
    
} else{
alert (`como ha perdido el libro deberá pagar ${perdida}`)
} }


informe();


