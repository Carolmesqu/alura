const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["21900005555", "21900005544"],    
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

for (let chave in cliente) {
    //Ele mostra o nome das nossas propriedades ou chave, exemplo nome
    //console.log(chave);
    //Ele mostra o valor da propriedade ou chave, exemplo João 
    //console.log(cliente[chave]);
    let tipo = typeof cliente[chave];
    if(tipo != 'object' && tipo != 'function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}

/**
 * O método for … In permite a iteração sobre as propriedades de um objeto como em um array. 
 */