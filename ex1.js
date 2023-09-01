var prompt = require('prompt-sync')();

var bah1 = prompt("Digite seu primeiro nome: ");
var bah2 = prompt("Digite seu segundo nome: ");

var resultado = bah1.concat(bah2);

console.log("Seu nome completo é: " + resultado);