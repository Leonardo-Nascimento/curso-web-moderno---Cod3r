// a estrutura set é uma estrutura parecida com um array , porem ela não aceita repetição e nap é indexada

const times = new Set()

times.add('Vasco')
//pode-se adicionar de forma encadeada
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
//função size para ver a quantidade de elementos
console.log(times.size)

//função has verifica se o valor passado por parametro existe dentro da estrutura set
//Obs: ele é case sensitive
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

//função delete remove o elemento passado por parametro da estrutura
console.log(times.delete('Flamengo'))
console.log(times.has('Flamengo')) // irá retornar falso

//pode-se adicionar um array comum, porém as repetiçoes serão removidas
const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes);

console.log(nomesSet);
