console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
//Mesmo depois de ter atribuido nulo para 'exports', O QUE SEMPRE SERÁ RETORNADO É O "module.exports"
//O "this", o "exports" e o "module.exports" apontam para o mesmo endereço de memória, mais so o "module.exports" que será retornado!!!
console.log(module.exports)

exports = {
    nome:'Teste'
}

console.log(module.exports)

module.exports = { public: true }

console.log(module.exports)
