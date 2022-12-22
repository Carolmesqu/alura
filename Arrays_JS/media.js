// const nota1 = 10;
// const note2 = 8;
// const nota3 = 7.5;
// const nota4 = 6.5;

/**
 * Posições:
 * Inicia por 0 e aumenta de 1 em 1 de acordo com a lista
 */

// abaixo a sintaxe de uma array/lista
const notas = [10, 8, 7.5, 6.5]; // podemos chamar de elementos, itens ou valores
                                // o elemento começa a ser contado a partir de 0, 1, 2.... chamamos de índices ou posições

/**A propriedade length:
 * Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. 
 * É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array.
 */

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// const media = (nota1 + note2 + nota3 + nota4) / 4;

console.log(media);

//imprimindo cada elemento, no caso abaixo o retorno vai ser 8
console.log(notas[2]);

const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];

// array com 1 elemento
const numero = [5];

// array com 3 elementos
const nums = [50, 43, 12];