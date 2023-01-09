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

//Podemos validar e obter um array com todas as chaves do nosso objeto
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário um endereço cadastrado")
}