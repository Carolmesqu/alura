const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

/**
 * o forEach consegue acessar o valor de todos os elementos em um array.  
 */
notas.forEach(function (nota, indice, array) {
    console.log('Primeiro parâmetro está fazendo a leitura do elemento que é: ', nota);
    //somaDasNotas += nota;
    console.log('Segundo parâmetro está fazendo a leitura do índice que é: ', indice);
    console.log('Teceiro parâmetro está fazendo a leitura do array que é: ', array);
});

const media = somaDasNotas / notas.length;

console.log(`A soma de todos os valores é ${somaDasNotas} a média das notas é ${media} que está sendo divido por ${notas.length}`);

/**
 * O único parâmetro obrigatório que temos que fornecer para esse método:
 * A função tem o nome de callback e vai ser executada para cada elemento 
 * do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o 
 * índice e o array atual, respectivamente
 */

