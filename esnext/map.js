//Estrutura Map é um tipo de estrutura que aceita varios tipos montando uma especie de array
//ela não aceita repetição

const tecnologias = new Map()

tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

// console.log(tecnologias.get('react').framework);
// console.log(tecnologias.get('react'));

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

//função delete remove o valor que foi passado por parametro
console.log(chavesVariadas.delete(123));
console.log(chavesVariadas.has(123));

//função size mostra quantos elementos eu tenho dentro da minha estrutura MAP
console.log(chavesVariadas.size);

//o valor da chave 123 será 'b' pois nao pode repetir a chave
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')

console.log(chavesVariadas)
