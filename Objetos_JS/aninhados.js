const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["21900005555", "21900005544"],    
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente.endereco);
console.log(cliente["endereco"]);