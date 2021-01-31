//Object.preventExtensions => restringe a possibilidade de adiconar
//mais atributos

const produto = Object.preventExtensions({
    nome: 'Qaulquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal => você nao consegue 
//adicionar nem deletar os atributos de um objeto
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Seledo', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)