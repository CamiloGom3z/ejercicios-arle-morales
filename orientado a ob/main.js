
const user ={
    name:"camilo",
    lastname:"gomez",
    age:23,
    showFullName(){
        return this.name
    }
}
//contructor de mas objetos con la mismas propiedades 
function person() {
    this.name = ""
    this.lastName=""
    this.age = 0
    this.showFullName = function (){
        return `${name} ${lastName}`
    }
}
//agregar una propiedad o metodo a al metodo
person.prototype.greet = function () {
    return `hello i am ${this.name}`
    
}
//alterar un valor de una propiedad del constructor
person.prototype.age = 10;


//nuevo objeto con mismas propiedades del metodo
const person1 = new person()
person1.name = "camilo"
person1.lastName = "roberts"
 console.log(person1);
 
const person4 = new Object ()
console.log(person4);



//clase para que leer facil cuando vengan de otro lenguaje como java c++ este es el constructor 
class person {
    constructor (name,lastName){
        this.name = name
        this.lastName = lastName
    }
}


const person2 = new person ("eva","andressa")
console.log(person2);


//para ser considerado objeto en un lenguaje debe cumplir : asosociacion objetos con la capacidad de unir o referir a otros objetos 

//composicion: la capacidad de un objeto referir a otros objetos pequeños

//segundo cumplimento encapsulacion simplicidad en el codigo
// herencia: un objeto puede adquirir algo de otro objeto
//polimorfismo capacidad con diferentes tipos de datos pero dar respuesta en el tipo de dato que se ha dado


