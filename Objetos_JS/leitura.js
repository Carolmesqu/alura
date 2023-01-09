/**
 * Fazendo a leitura do arquivo JSON, o required é uma função que o node nos 
 * permiti usar para puxarmos o código de outro lugar, no exemplo abaixo ele 
 * puxou o JSON e transformou em Objeto. Mas ele tem diversas outras funções
 */
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);