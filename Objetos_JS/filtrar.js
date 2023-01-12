const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(clientes){
    /**
     * O filter recebe uma função dentro dele, se ela for verdadeira ele vai selecionar a entrada e se for falsa ele vai ignorar
     * Utilizamos o ! para negar a expressão, na caso abaixo ele quer que tenha apt mas não tenha complemento
     */
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    })
}

const filtrados = filtrarApartamentosSemComplemento(clientes);
console.log(filtrados);