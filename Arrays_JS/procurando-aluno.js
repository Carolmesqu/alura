const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

//No caso o indexOf acha o indice da array e o includes ve se o que estamos procurando está realmente na lista
//Includes confere se o parametro que passamos está incluso na lista 
//IndeOF retorna o indice do parametro que passamos
function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){        
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);        
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}.`);
    } else {
        console.log('Aluno não encontrado!');
    }
}

exibeNomeENota("João");