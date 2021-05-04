const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((ch, vl) => {
    console.log(vl, ch)
})

//função has verifica se existe o valor q foi passado por parametro
console.log(chavesVariadas.has(123));