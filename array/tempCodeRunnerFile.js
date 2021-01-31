const nums = [1, 2, 3, 4, 5]

//Map é um for com proposito de transformar o array
//em um novo array do mesmo tamanho porem com os elementos modificados
let resultado = nums.map(e => e * 2)
resultado = resultado.map(function(e){
    return e * 2
})

console.log(resultado)