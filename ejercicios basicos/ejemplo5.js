function calcularTabla(params) {
    let numeroTabla = 2;
    let mostrar = ``;
    for (let i = 1; i <= 5; i++) {
        mostrar += `${i} x ${numeroTabla} = ${ i * numeroTabla}\n`;
    } return mostrar;
} 
console.log(calcularTabla());


