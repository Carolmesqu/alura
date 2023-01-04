const numeros = [100, 200, 300, 400, 500, 600];

/**
 * Primeira expressão: é executada apenas uma única vez.
 * Segunda expressão: é uma condição de execução
 * Terceira expressão: é executada sempre ao final do bloco
 */

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

/**
 * Por exemplo, podemos percorrer um array do fim ao início:
 * Declaramos o valor inicial da variável de controle como 
 * o valor da última posição do array (numeros.length - 1); 
 * realizamos um decremento (i--) ao invés de um incremento e
 * a condição de execução é i >= 0. Ou seja, nesse caso, 
 * a variável i começará do valor 5 e irá até 0.
 */

const numeros1 = [100, 200, 300, 400, 500, 600];

for (let i = numeros1.length - 1; i >= 0; i--) {
  console.log(numeros1[i]);
}

/**
 * Outra possibilidade é alterar a quantidade incrementada ou 
 * decrementada, utilizando o mesmo código acima, mas alterando 
 * o decremento para i -= 2. Então, teremos o seguinte:
 */

const numeros2 = [100, 200, 300, 400, 500, 600];

for (let i = numeros2.length - 1; i >= 0; i -= 2) {
  console.log(numeros2[i]);
}

/**
 * Também temos controle sobre a condição de execução, então se 
 * alterarmos esse último código para ter a condição 
 * numeros[i] > 300, teremos o seguinte:
 */

const numeros3 = [100, 200, 300, 400, 500, 600];

for (let i = numeros3.length - 1; numeros3[i] >= 300; i -= 2) {
  console.log(numeros3[i]);
}

/**
 * Por fim, até agora utilizamos a estrutura for apenas 
 * para percorrer arrays, mas ela pode ser utilizada para 
 * repetir qualquer instrução conforme a necessidade. 
 * Por exemplo, podemos criar dinamicamente um array 
 * com todos os números pares de 0 a 100:
 */

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.table(numerosPares);


/**
 * Dentro da expressão temos:
uma variável contadora, que é criada antes do início do laço (let indice);
uma expressão de teste (indice < lista.length), que é executada antes de 
cada iteração e que verifica se o código dentro do bloco {} deve ou não ser executado;
por último, uma expressão que é executada ao final de cada laço, normalmente 
um incremento (++) ou decremento (--) da variável contadora.
 */