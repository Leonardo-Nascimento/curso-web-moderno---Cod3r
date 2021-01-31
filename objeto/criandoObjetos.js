//1º Forma - usando a notação literal

const obj1 = {}

console.log(obj1)


//2º Forma - Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


//3º Forma - Funções construtoras 
//*Igual a primeira, porem com o construtor *//

function Produto(nome, preco, desc) {
    //this.nome é um atributo publico pois usa o this!
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15);
const p2 = new Produto('notebook', 2998.99, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());



//4º Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João',7980,4);
const f2 = criarFuncionario('Maria', 11400, 1);

console.log(f1.getSalario(),f2.getSalario())


// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);


//Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);