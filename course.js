const prompt = require("prompt-sync")();

// var name = prompt("Hello, enter you name: ")
// //var messageCount = message.length
// var firstL = name.slice(0,1)
// var fToUpper = firstL.toUpperCase()
// var rname = name.slice(1,15)
// var rtoLower = rname.toLocaleLowerCase ()
// console.log("Hello " + fToUpper + rtoLower)



function ImprimeLista() {
    let lista = ["perro", "gato", "hamster", "tortuga"];
    for (let recorrido = 0; recorrido < lista.length; recorrido++) {
        if (recorrido === 1) {
            console.log("nulo");
        } else {
            let imprimir = lista[recorrido];
            console.log(imprimir);
        }
    }
}

ImprimeLista();