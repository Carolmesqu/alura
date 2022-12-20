// Parâmetros de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

// Pra executarmos uma função passamos o nome dela
console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parâmetros x argumentos

//ordem dos parâmetros 

function nomeIdade(nome, idade){
    return `Meu nome é  ${nome} e a minha idade é ${idade}`;
}

console.log(nomeIdade("Maria", 26));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

//console.log(multiplica(soma(4, 5), soma(3, 3)));
console.log(multiplica(soma(4, 5)));


/**
 * Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução,
 *  sem a necessidade de disponibilizar o resultado para o restante do código. 
 * Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.
 */
function cumprimentar(){
    console.log('oi gente!');
   }
   
   cumprimentar();

   /**
    * Função sem retorno, com parâmetro: similar à anterior, 
    * porém agora a função recebe, via parâmetro, o nome da pessoa 
    * a ser cumprimentada. Dessa forma é possível reaproveitar a função
    *  para que funcione de maneira parecida com o nome de qualquer pessoa 
    * (desde que esteja no formato de dado string.
    */

   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`);
   }
   
   cumprimentaPessoa('Helena');

   /**
    * 
    * Função com retorno, sem parâmetro: É possível combinar funções 
    * para que cada uma controle apenas uma parte do código e elas trabalhem juntas.
    * No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. 
    * Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na 
    * função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” 
    * deve estar disponível para outras partes do programa - ou seja, deve ser 
    * retornada com o uso da palavra-chave return.
    */

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`);
   }
   
   cumprimentaPessoa('Paula');

   /**
    * A função cumprimentaPessoa(nomePessoa) recebe como parâmetro uma string onde 
    * podemos passar qualquer nome no momento em que executamos (ou chamamos) a função. 
    * Quando isso acontecer, a função cumprimentar() será executada também, e seu valor 
    * de retorno - a string Oi gente! - vai ocupar o lugar do ${} onde a função está sendo 
    * chamada. Função com return e mais de um parâmetro: Lembrando que as funções podem 
    * receber a quantidade de parâmetros necessária, e que o JavaScript identifica os 
    * parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro numero1 se refere 
    * a 15, o parâmetro numero2 se refere a 30 e o parâmetro numero3 se refere a 45. 
    * Somos nós, que estamos desenvolvendo o código, que damos os nomes aos parâmetros 
    * de acordo com o dado que a função espera receber - no caso, números.
    */

   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   console.log(operacaoMatematica(15, 30, 45));