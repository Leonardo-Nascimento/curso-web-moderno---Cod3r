//let e const

{
    var a = 2
    let b= 3
    console.log(b) //como a variavel let esta dentro do mesmo bloco o valor pode ser acessado
}

console.log(a)
//console.log(b)  o let so tem escopo de bloco, e tentar rodar vai dar erro

//template String

const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring

const [l, e, ...tras] = 'Cod3r'

console.log(l, e, tras)

const [x, y] = [1 , 2]
console.log(x, y)

const {nome , idade} = {nome: 'Ana', idade: 9}
console.log(nome, idade)