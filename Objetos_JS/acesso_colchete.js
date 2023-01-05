const cliente = {
    nome: "André",
    idade: 32,
    cpf: "7798165053",
    email: "andre@dominio.com"
}

/**
 * //Acessamos os valores das propriedadas com colchetes [""], 
 * ele serve pra acessarmos os campos que não sabemos qual seria 
 * e ao acessa uma propriedade que não existe, ele retorna undefined, 
 * não quebrando o sistema
 */
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});