const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//Esse metodo remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

//Esse metodo adiciona um novo elemento na ultima posição
pilotos.push('Verstappen')
console.log(pilotos)

//Esse metodo remove o primeiro elemento da lista
pilotos.shift()
console.log(pilotos)

//Esse metodo adiciona um novo elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

//adicionando 2 elementos apartir da posição 2
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//removendo 1 elemento apartir da terceira posição
pilotos.splice(3, 1)
console.log(pilotos)

//Esse metodo retorna um novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//gerando um novo array apartir de um intervalo do antigo array
// porem a ultima posição não entra
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
