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

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
})

console.log(resultado)


