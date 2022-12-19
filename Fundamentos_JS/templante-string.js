const nome = "Carolina";
const idade = 2022-1996;
const cidadeDeNascimento = "Rio de Janeiro";
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

//const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

//templante string
const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`; 
console.log(apresentacao);

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido);


//Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando 
//um ?, seguido da possibilidade true, um : e a possibilidade false, ou seja, comparação ? true : false
