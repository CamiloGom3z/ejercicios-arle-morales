
function sumarArreglo(){
    var num = 5;
    let arr = [1,2,3,4,5,6,2];
    let resultado = 0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < num){
        resultado += index;
        }
    }
console.log(resultado);
}
sumarArreglo()