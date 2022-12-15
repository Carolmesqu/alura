// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456"; //Se formos converter para número, temos que garantir que só haja números, caso tenha letra vai causa um NaN

console.log(numero === numeroString);//fez a comparação e verifica que os tipos não são iguais, no caso um é number e outro é string
console.log(numero == numeroString); //fez a comparação e transformou ambas em string
console.log(numero + numeroString);//concatenou o código

// conversão explícita
//Number() - Transforma a informação em número
//String() - Transforma a informação em string
console.log(numero + Number(numeroString));

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectadoO = false;
console.log(Number(usuarioConectadoO)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

/**
 * Variáveis declaradas com var ou let podem ser reatribuídas. 
 * Porém, uma variável declarada com let só pode ser usada no 
 * mesmo escopo em que está definida. No caso da declaração const, 
 * significa que a variável sempre terá uma referência ao mesmo objeto 
 * ou valor primitivo, porque essa referência não pode ser alterada. 
 * A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.
 */