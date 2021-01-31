//Isso gera escrita de codigo repetidamente
const prod1 = {
    nome: 'nome do produto',
    preco: 45
}

const prod2 = {
    nome: 'nome do produto',
    preco: 1234
}


//factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome:'Silva'
    }

}

console.log(criarPessoa());


