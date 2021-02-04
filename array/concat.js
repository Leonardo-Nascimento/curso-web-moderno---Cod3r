//O metodo concat adiciona um array ou um elemento a um array ja existente

const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']

const todos = filhas.concat(filhos, 'Fulano')
console.log(todos)

console.log([].concat([1,2], [3,4], 5, [[6,7]]))