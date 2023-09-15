// // 0. Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento y comprensión de un tema 
// // o disciplina específica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
// // (programa básico-simulación):
// // a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso.
// // b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
// c. Si la opción es correcta se suma 10 puntos por cada pregunta}
alert("responda SI O NO las siguientes preguntas...")
let total = 0;
  
function preguntas() {
    let pregunta1 = prompt("el cuerpo humano tiene 306 huesos?")
    if (pregunta1 == "SI") {
        total += 10
       alert("usted acerto y sumo"+(total));
    } else if (pregunta1 == "NO") {
        alert("pregunta incorrecta")
    } else {
        alert("digite bien si es false o true")
        return
    }
}
    function n2() {  
    let pregunta2 = prompt("js es un editor de codigo debilmente tipado?")
        if (pregunta2 == "si") {
            total += 10 
            alert("usted acerto y sumo"+(total));
       } else if (pregunta2 == "NO") {
           alert("pregunta incorrecta")
       } else {
           alert("digite bien si es false o true")
         return 
       }
    }
    function n3() {
        let pregunta3 = prompt("mysql es un programda para bases de datos?")
        if (pregunta3 == "SI") {
            total += 10
            alert("usted acerto y sumo" + (total));
          } else if (pregunta3 == "NO") {
              alert("pregunta incorrecta")
          } else {
              alert("digite bien si es false o true")
              return
          }
    }
   function n4() {
    let pregunta4 = prompt("github es un programa para guardar todos los cambios de proyectos?")
    if (pregunta4 == "SI") {
        total += 10
        alert("usted acerto y sumó" + (total));
    } else if (pregunta4 == "NO") {
        alert("pregunta incorrecta")
    } else {
        alert("digite bien si es false o true")
        return
    }
   }
function n5() {
    let pregunta5 = prompt("js es un editor de coidgo estricto?")    
    if (pregunta5 == "SI") {
        total += 10
        alert("usted acerto y sumo"+(total));
   } else if (pregunta5 == "NO") {
       alert("pregunta incorrecta")
   } else {
       alert("digite bien si es false o true")
   }
   alert("el total de puntos es de" +(total))
}
 preguntas()
 n2()
 n3()
 n4()
 n5()
