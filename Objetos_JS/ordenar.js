const clientes = require("./clientes.json");

function ordenar(lista, propriedade){
    /**
     * sort ordena uma função
     */
    const resultado = lista.sort((a, b) => {
        //Retornamos -1 isto é como a função sort pede p/ escrevemos a sintaxe dela
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        //se ele cair aqui é positivo
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        //se eles forem iguais então entra no else no caso 0
        return 0;
    })
    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);

/**
 * Ordenamos uma lista de objetos passando os parametros dentro do nosso objeto em especifico 
 */

/**
 * Ordem inversa
 * 
 *  const ordenadoNome = ordenar(clientes, "nome");
 *  const ordenadoInverso = ordenadoNome.reverse();
 * 
 * function ordenar(lista, param, ordem = "crescente") {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  if (ordem !== "crescente") {
    resultado.reverse();
  }

  return resultado;
}
 */