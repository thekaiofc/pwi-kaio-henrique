console.log("Olá mundo!")
/* console é um comando que vai exibir
informações no console do navegador. */

var Variavel1 = 2;
// var tem o tipo de escopo global

let Variavel2 = "Olá";
//let tem o tipo de escopo local

const Variavel3 = 3 + 3; 
// const é do escopo global e não pode ser reescrita

console.log("A variavel Variavel1 é igual a ", Variavel1)
Variavel1 = 4

console.log("A variavel Variavel1 é igual a ", Variavel1)

console.log("O valor de Variavel2 é igual a ", Variavel2)
Variavel2 = "oi"

console.log("O valor de Variavel2 é igual a ", Variavel2)

console.log("Essa é a constante ", Variavel3)
