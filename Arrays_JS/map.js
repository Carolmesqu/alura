const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);

const arrayNums = [1, 2, 3, 4];

// function multiplicaPorDez(num) {
//     return num * 10
//    }

// const arraySomada = arrayNums.map(multiplicaPorDez)

const arraySomada = arrayNums.map(num => num * 10)

console.log(arraySomada)

