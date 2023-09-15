function Estadisticas() {
    this.cantUser =  0
    this.cantEstudents = 0
    this.cantTeacher = 0
    this.cantOfice= 0
    this.cantTel = 0
    this.cantidadTrasnferenciasAFisico= 0
    this.cantidadTrasnferenciasATelefono=0
}

class MetodosUtilitarios {

    calcularEstadisticasTelOf(estadisticas, resp) {
      if (resp == 1) {
        estadisticas.cantTel++
      } else if (user == 2) {
        estadisticas.cantOfice++
      }
      return estadisticas;
    }
    calcularEstadisticasEstuProf(estadisticas, resp) {
       estadisticas.cantUser++;
    if (resp == "estudiante") {
      estadisticas.cantEstudents++
    } else if (resp == "profesor") {
      estadisticas.cantTeacher++
    } else {
      alert("escribe bien tu opcion");
    }
    }
    mostrarEstadisticas(estadisticas){
      let jsonString = jsonString(estadisticas)
      alert (jsonString)
    }
    transferenciaFisicoTel(estadisticas,user,trasferencia){
      if (user==1 && trasferencia == 1) {
        alert("ya esta en telefono");
        }
       else {
           estadisticas.cantidadTrasnferenciasATelefono++;
       }
        if (user==2 && trasferencia == 2) {
        alert("ya esta en oficina");
        }
       else {
               estadisticas.cantidadTrasnferenciasAFisico++;
       }
}
}
let estadisticas = new Estadisticas();
const utils = new MetodosUtilitarios();

function estadistic() {
let especificacion = prompt("es estudiante o profesor?");
 let user = Number(prompt("desea atentido 1.telefono  2. oficina"));
 estadisticas = utils.calcularEstadisticasEstuProf(estadisticas,especificacion);
 estadisticas = utils.calcularEstadisticasTelOf(estadisticas,user);
 let trasferencia = Number(
  prompt("desea ser transferido a 1 para telefono o 2 oficina")
);
 estadisticas = utils.transferenciaFisicoTel(estadisticas,user,trasferencia)
}

function showEstadistic(){
  utils.mostrarEstadisticas(estadisticas);
}
estadistic();
showEstadistic();










// class Atencion {
//     constructor(modulo, segmento, transferido) {
//       this.modulo = modulo;
//       this.segmento = segmento;
//       this.transferido = transferido;
//     }
//   }
  
//   class Estadisticas {
//     constructor() {
//       this.atendidos = 0;
//       this.atendidosPorSegmento = {};
//       this.transferidos = [];
//     }
  
//     agregarAtencion(atencion) {
//       this.atendidos++;
//       this.agregarAtencionPorSegmento(atencion);
//       if (atencion.transferido) {
//         this.transferidos.push(atencion);
//       }
//     }
  
//     agregarAtencionPorSegmento(atencion) {
//       if (!this.atendidosPorSegmento[atencion.modulo]) {
//         this.atendidosPorSegmento[atencion.modulo] = {};
//       }
  
//       this.atendidosPorSegmento[atencion.modulo][atencion.segmento]++;
//     }
  
//     obtenerEstadisticas() {
//       return {
//         atendidos: this.atendidos,
//         atendidosPorSegmento: this.atendidosPorSegmento,
//         transferidos: this.transferidos,
//       };
//     }
//   }