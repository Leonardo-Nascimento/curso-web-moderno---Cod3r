const prod1 = {}
prod1.nome = "celular ultra mega";
prod1.preco = 4900.90;
prod1['Desconto Legal'] = 0.40  // evitar atributos com espaço 

console.log(prod1);

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90
}

console.log(prod2);

console.log(typeof Object);

var {nome , preco, altura = 'sei lá'} = prod2

console.log(nome, preco, altura);