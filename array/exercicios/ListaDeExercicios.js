// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
// função) e com ponto de exclamação "!" no final.

function comprimentar (nome){
    console.log(`Olá, ${nome}!`)
}

comprimentar('Leonardo')

// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// 📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
// desconsidere também dias decorridos desde o último aniversário.

const idadeEmDias = (idade) => {
    return `Sua idade em dias é: ${idade * 365}  dias!`
}

console.log(idadeEmDias(2))

//Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.

let calcularSalario = (horasNoMes, valorPorHora) => {
    let valorPorMes = valorPorHora * horasNoMes
    return valorPorMes
}

console.log(calcularSalario(240, 15))

// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

let receberPrimeiroEUltimoElemento = (array) => {
    let tamanho = array.length
    let novoArray = []
    return novoArray.concat(array[0], array[tamanho - 1])
}

console.log(receberPrimeiroEUltimoElemento([1,2,3,4,5]))

// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
// bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
// exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
// é bissexto ou não.

let checarAnoBissexto = (ano) => {
    if ((ano % 4) === 0 && (ano % 100) != 0 || (ano % 100) === 0 &&  (ano % 400) === 0) {
        return true
    }
    else
    return false
}
console.log(checarAnoBissexto(2100))

// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

let despesasTotais = (array) => {
let precos = array.map(produtos => produtos.preco)

let total = precos.reduce(function(acumulador, atual){
    return acumulador + atual;
}, 0)

return total
}

const produtos1 = [{nome: "Jornal online", categoria: "Informação", preco: 89.99}, {nome: "Cinema", categoria: "Entretenimento", preco: 150}]
const produtos2 = [{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}]

console.log(produtos1)
console.log(produtos2)

console.log(despesasTotais(produtos1)) // retornará 239.99
    
console.log(despesasTotais(produtos2))   // retornará 34599.89



const produtos3 = [{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}]

produtos3.forEach(produtos => {console.log(produtos.nome + '-' + produtos.preco) })