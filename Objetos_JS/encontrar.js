const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
    //O metodo find recebe uma chamada/função e se ela for verdadeira ele retorna o item pra nós
    //return lista.find((item) => item[chave] === valor);
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "11998123183");

console.log(encontrado);
console.log(encontrado2);

/**
 * Nessa aula retornamos um item de acordo com os parametros correspondente que passamos para uma função.
 * 
 * Tivemos um undefined por causa da igualdade estrita, por isso mudados para includes
 */