//Dividando a sala de aule em duas listas com a mesma quantidade de alunos
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 
'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//Abaixo indicamos 2 parametros, então o slice vai pegar do indece 0 até o 9, porque ele não vai considerar o 10 é como se ele fizesse -1
//const sala1 = alunos.slice(0, 10);

//Nesse caso para dividirmos a quantidada de alunos, chamamos a partir do indice 0 que seria a posição 1 e pedimos para dividir por 2 a lista de alunos
const sala1 = alunos.slice(0, alunos.length /2);
const sala2 = alunos.slice(alunos.length / 2);
//Nesse caso abaixo, se não passamos o 2º parametro, o slice vai pegar de 10 em diante;
// const sala2 = alunos.slice(10);

console.log(alunos);
console.log(sala1);
console.log(sala2);





