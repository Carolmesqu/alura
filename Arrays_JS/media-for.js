const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

/**
 * Agora, se quisermos percorrer matrizes, um único for não será suficiente. 
 * Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, 
 * uma matriz de duas dimensões usará dois for, um dentro do outro. Começaremos 
 * criando mais alguns arrays e uma matriz de 2 dimensões.
 */

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media1 = 0

/**
 * Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar 
 * o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um 
 * array e não mais um valor numérico. Por isso usaremos outro for para acessar 
 * esse array.
 */

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media1 += notasGerais[i][j]/notasGerais[i].length;
    }
  }

  /**
   * No entanto, este código retorna uma média de 24. Como tal média é possível 
   * se não temos nenhum número maior do que 10? O que acontece é que para 
   * conseguir a média entre todos os arrays, temos que somar as médias dos 
   * arrays de notas, 8+7+9 edividir pela quantidade de arrays em notasGerais.
   */

  media2 = media1/notasGerais.length

  console.log(media1);
  console.log(media2);