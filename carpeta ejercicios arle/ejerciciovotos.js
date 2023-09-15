//n sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus 
// votos de forma electrónica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o 
// características (programa básico-simulación):
// a. La cantidad de votantes son 10 personas
// b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
// c. El sistema debe ir sumando los votos de cada candidato.
// d. El sistema debe arrojar el ganador y perdedor de la votación 

let cantidadVotantes = 10;
let votosAna = 0;
let votosDiego = 0;

function votos() {
    for (let index = 0; index <= cantidadVotantes; index++) {
        let voto = parseInt(prompt(`elija 1 ana maria o 2 diego acero`))
        if (voto == 1) {   
            votosAna += 1;
        } else if (voto == 2) {
            votosDiego += 1
        }
    }
    if (votosAna > votosDiego){
        alert (`ana ha ganado con ${votosAna}`)
    } else if (votosDiego > votosAna){
        alert (`diego ha ganado con ${votosDiego}`)
    } else {
        alert("empate")
    }
} votos()





