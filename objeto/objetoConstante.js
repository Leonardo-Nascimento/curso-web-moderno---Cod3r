//a constante aponta para um endereço de memoria e este aponta para o objeto
// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome= 'Pedro';
console.log(pessoa)

//se tentar atribuir um novo objeto para o objeto pessoa dará erro
//pessoa  -> 456 ->{...}
//pessoa = {nome: 'Ana'}

//metodo que congela o objeto e o bloqueia para novas atribuições
Object.freeze(pessoa)
//nao atribui pois está congelado
pessoa.nome = 'Maria';
console.log(pessoa.nome);
