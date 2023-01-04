const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//O Set remove elementos duplicados de uma forma fácil
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

//Abaixo passamos direto o valor de entrada do Set e ao mesmo tempo já espalhamos ele para o array
const nomesAtualizadosSegundoExemplo = [... new Set(nomes)];

console.log(nomesAtualizados);
console.log(meuSet);
console.log(nomesAtualizadosSegundoExemplo);
