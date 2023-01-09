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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinario: cliente.nome,
    ...cliente.enderecos[0],    
}

console.log(encomenda);