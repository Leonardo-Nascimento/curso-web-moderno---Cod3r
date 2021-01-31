const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0 ]

//sem calback
const notasBaixas1 = []

for (let i in notas){
    if(notas[i] < 7){
        //push é uma função js para incluir elementos em uma array
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

//com callback
//filter  é uma função js que retona true ou false 
//com base em uma função callback passada
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7;
})

console.log(notasBaixas2);

//usando função arrow 
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);

