const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];
const numeros1 = [numerosPares, numerosImpares];

console.table(numeros);
console.table(numeros1);

// const num1 = 1;
// const num2 = 2;

//Nesse caso abaixo funciona da mesma forma que acima
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

console.log(num1, num2, outrosNumeros);

//Nesse caso pela array está vazia ele vai fazer a leitura do valor que atribuimos a variavel nome1 
const [nome1 = 'Juliana'] = [];

console.log(nome1);

const pessoa = {
    nome: 'Maria',
    idade: 26
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 21988888888

}

console.log(pessoa, pessoaComTelefone);

//const nome = pessoa.nome

//Nesse caso ele vai recuperar o mesmo valor que acima, ele criou uma varia nome é pegou a propriedade nome de pessoa
const { nome } = pessoa;
const { idade } = pessoa;

console.log(nome);
console.log(idade);

// function imprimeDados(dados){
//     const { nome , idade } = dados;
//     console.log(nome, idade);
// }

function imprimeDados({ nome , idade }){    
    console.log(nome, idade);
}

imprimeDados(pessoa);

