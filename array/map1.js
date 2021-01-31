
const nums = [1, 2, 3, 4, 5]

//Map é um for com proposito de transformar o array
//em um novo array do mesmo tamanho porem com os elementos modificados
let resultado = nums.map(e => e * 2)
resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)
