const cliente = {
    nome: "André",
    idade: 32,
    cpf: "7798165053",
    email: "andre@dominio.com"
}

console.log(cliente);
//abaixo usamos o operador ponto . e assim retornamos um valor de uma propriedade
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os três primeiro digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

//Acessamos o valor de uma propriedade e manipulamos ele