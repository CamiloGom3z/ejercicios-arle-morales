// let message = number(prompt ("digite un numero"))
// switch (message) {
//     case 1:
//         document.write("hola")
//         break;
// case 2 :
//     document.write("geloo")
//     default:
//         break;
// }


let opcionTurno = prompt("1. ver saldo 2. consignar 3. retirar");
let saldo = 122334;

switch (opcionTurno) {

    case "1": {
        alert(`su saldo es ${saldo}`);
        break;
    }
    case "2": {
        let consignacion = Number(prompt("ingrese el valor a consignar: "))
        saldo += consignacion;
        alert(`su saldo ahora es ${saldo}`);
        break;
    }

    case "3": {
        let retiro = Number(prompt("ingrese valor a retirar"))
        saldo -= retiro;
        alert(`retiro por ${retiro}, saldo nuevo ${saldo}`)
        if (retiro <= saldo)
        alert("su saldo es insuficiente")
        break;
    };
        
    }

