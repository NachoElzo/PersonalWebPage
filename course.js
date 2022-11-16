const prompt = require("prompt-sync")();

var message = prompt("enter a message ")
var messageCount = message.length
console.log("el total de tu mensaje es de : " + messageCount + " letras" +  ", te quedan: " + (150 - messageCount))
