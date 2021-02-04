// a função reduce espera 2 parametros: 1 elemento que será o acumulador 
//e 1 elemento que será o indice atual
//e ai ele soma o atual + o acumulador
// depois da chamada da função callback ah a opção de passar o valor inicial do acumulador(opcional)



const alunos = [
    {aluno: 'João', nota: 7.3, bolsista: false},
    {aluno: 'Maria', nota: 9.2, bolsista: true},
    {aluno: 'Pedro', nota: 9.8, bolsista: false},
    {aluno: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio1: Todos os alunos são bolsistas?
const desafio1 = alunos.map(a => a.bolsista).reduce(function (acumulador, atual){    
    return acumulador && atual 
})


if (desafio1) {
    console.log("Todos os alunos são bolsistas!")
} else
    console.log("Nem todos os alunos são bolsistas!")




//Desafio 2: Algum aluno é bolsista?
const desafio2 = alunos.map(a => a.bolsista).reduce(function (acumulador, atual){
    
    return acumulador || atual
},false)

if (desafio2) {
    console.log("Pelo menos um aluno é bolsista!")
} else
    console.log("Nenhum aluno é bolsistas!")




