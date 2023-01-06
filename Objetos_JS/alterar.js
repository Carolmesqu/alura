//Adicionando uma propriedade a um array já existente
const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome);

pessoa.telefone = "11 20301122";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

//
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

/**
 * Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
 */
delete objPersonagem.aliado
/**
 * Também é possível utilizar a notação de colchetes:
 */
delete objPersonagem["status"]

/**
 * Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.
 */

console.log(objPersonagem.aliado) 
console.log(objPersonagem.status) 

console.log(objPersonagem);

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

/**
 * O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false 
 * para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, 
 * por exemplo, uma propriedade que não existe no objeto:
 */
console.log(delProp) //true
console.log(delPropInexistente) //true

