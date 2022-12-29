const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//Outra maneira de usarmos o for, for of.

for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

/**
 * Não é necessário criar variáveis de controle, 
 * incrementos e condições de execução como no for.
 * O for of fornece uma sintaxe mais sucinta para 
 * percorrermos um array para o caso que geralmente 
 * queremos fazer: percorrer todos os elementos do 
 * início ao fim.
 */