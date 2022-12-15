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