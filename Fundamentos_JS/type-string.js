const texto1 = 'Olá, mundo!';
const texto2 = 'Olá, mundo!';
const senha = 'senhaSuperSegura123456!';
const StringDeNumeros = '34567';

const citacao = 'Meu nome é ';

const meuNome = 'Maria';

//concatenação (+)
console.log(citacao + meuNome);

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//const cidade = "belo horizonte";
//const input = "Belo Horizonte";

//console.log(cidade === input); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

console.log(senha.length) // A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém

var x = 'Mozilla';
var empty = '';

console.log('Mozilla possui ' + x.length + ' unidades de código de comprimento');
/* "Mozilla possui 7 unidades de código de comprimento" */

console.log('A string vazia possui um comprimento de ' + empty.length);

let myString = "campainhas";

// A tentativa de atribuir um valor à propriedade .length
// de uma string não tem efeito observável.

myString.length = 4;
console.log(myString);
// retorna  "campainhas"
console.log(myString.length);

// retorna 10
/* "A string vazia possui um comprimento de 0" */

var num = 15;
alert(String.replace(num, /5/, '2'));


//templante string ou templante literal
