var numero1 = prompt ("Ingrese numero 1: "); 
var numero2 = prompt ("Ingrese numero 2: ");
var numero3 = prompt ("Ingrese numero 3: ");
numero1= parseInt (numero1); 
numero2= parseInt (numero2);
numero3 =parseInt (numero3);
function lados() {
    if(numero1 == numero2  && numero1 == numero3){
        alert("todos los lados son iguales ")
    } else{
        alert("por favor ingrese lados iguales")
    }
} lados();