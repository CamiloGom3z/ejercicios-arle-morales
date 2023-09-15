
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function dealingCards() {
    let user1 = 0;
    let user2 = 0;
    validador = true;
    do {
        user1 = aleatorio(1, 10) + user1;
        alert("usuario1 saco "+ user1);
        user2 = aleatorio(1, 10) + user2;
        alert("usuario2 saco " + user2);
        if (user1 == 21 && user2 == 21) {
            alert("empate" + user1 + user2)
            validador = false;
        }
        else if (user1 == 21) {
            alert("usuario 1 ha ganado")
            validador = false;
        } else if (user2 == 21) {
            alert("usuario 2 ha ganado")
            validador = false;
        }
        if (user1 > 21) {
            alert("user1 se voló")
            validador = false;
        } if (user2 > 21) {
            alert("usuer2 se voló")
            validador = false
        } else if ( user1 > 21 && user2 < 21){
            alert ("user2 ganó" )
        } else if(user1 < 21 && user2 > 21){
            alert("user1 ganó")
        } 
    } while (validador == true){
        return
    }

} dealingCards()


x = true;
y = false;

console.log(y&= x);



