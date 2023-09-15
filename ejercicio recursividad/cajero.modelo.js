// cliente ID y pin 4
// crear clase banco validar user
//menu de cajero retirar efectivo, realizar deposito, trasferencia entre cuentas, consulta de saldo
//mostrar resultado
//validar 3 intentos exitosos de login

class Clientes {
  constructor(id, cuenta, banco, pin, saldo) {
    this.id = id;
    this.cuenta = cuenta;
    this.banco = banco;
    this.pin = pin;
    this.saldo = saldo;
  }
}
const cliente1 = new Clientes(
  1,
  "1234567890",
  "Banco de Bogotá",
  "1234",
  100000
);

const cliente2 = new Clientes(
  2,
  "9876543210",
  "Banco Santander",
  "4321",
  200000
);


var clientesBanco = [];
clientesBanco.push(cliente1);
clientesBanco.push(cliente2);


// class Banco {
//   constructor(cliente, validador, cajero) {
//     this.clientes = cliente;
//     this.validador = function validar(clientes) {
//       if (cliente == banco.clientes) {
//         return true;
//       } else {
//         return false;
//       }
//     };
//   }
// }

class Cajero {
  showBalance(cuentaUser, pinUser){
    var clienteActual = null;
   for (let i = 0; i < clientesBanco.length; i++) {
    if(clientesBanco[i].cuenta == cuentaUser && clientesBanco[i].pin == pinUser){
      clienteActual = clientesBanco[i];
    }
   }
   if(clienteActual != null){
   console.log(`Su saldo es ${clienteActual.saldo}`)
   } else{
    console.log("error, datos incorrectos");
    }
  }
  
 
  withDraw(cuentaUser,pinUser,withDrawUser) {
    
    let haveclient = false;
   for (let i = 0; i < clientesBanco.length; i++) {
    if(clientesBanco[i].cuenta == cuentaUser && clientesBanco[i].pin == pinUser){
      clientesBanco[i].saldo = clientesBanco[i].saldo-withDrawUser;
      haveclient = true;
      console.log(`hizo retiro de ${withDrawUser} ahora su saldo es de ${clientesBanco[i].saldo}`);
    }
   }
   if(haveclient == false){
    console.log("error, datos incorrectos");
   }
  
  }

  deposit(cuentaUser,pinUser,withDepositUser) {
    let haveclient = false;
   for (let i = 0; i < clientesBanco.length; i++) {
    if(clientesBanco[i].cuenta == cuentaUser && clientesBanco[i].pin == pinUser){
      clientesBanco[i].saldo = clientesBanco[i].saldo+withDepositUser;
      haveclient = true;
      console.log(` su nuevo saldo es de ${clientesBanco[i].saldo}`);
    }
   }
   if(haveclient == false){
    console.log("error, datos incorrectos");
   }
  }
}



var cajero = new Cajero();

function principal() {
  let optioUser = 2;
   /*Number(prompt("1.show balance 2.withdraw 3.deposit"));*/
   var cuentaUser ="1234567890";
  //  Number(prompt("digite su cuenta porfavor"))
   var pinUser = "1234";
   //Number(prompt("digite su pin porfavor"))


  if (optioUser == 1) {
    cajero.showBalance(cuentaUser, pinUser);
    
  } else if (optioUser == 2) {
    let withDrawUser = 50000;
    //Number(prompt("Cuanto desea retirar"))
    cajero.withDraw(cuentaUser,pinUser,withDrawUser);
  } else if (optioUser == 3) {
    let withDepositUser = 50000;
    //Number(prompt("Cuanto desea depositar"))
    cajero.deposit(cuentaUser,pinUser,withDepositUser);
  } else {
    console.log("marque opcion correcta");
    // alert("marque una opcion correcta");
  }
}

principal();
