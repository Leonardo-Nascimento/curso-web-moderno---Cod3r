
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//console.log(carrinho)

//Retornar um array apenas com os preços

const resultado = carrinho.map(function(e){
    e = JSON.parse(e)
    return e.preco
})

console.log(resultado)