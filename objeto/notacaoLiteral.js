const a = 1
const b = 2
const c = 3

//dos dois jeitos da certo
const obj1 = {a: a, b: b, c: c}

// no ES6 passou a aceitar a criação dessa forma
const obj2 = {a, b, c}
console.log(obj1,obj2)

//criando objeto por partes, primeiro atributo depois o valor

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //
    },
    funcao2(){
        //
    }
}

console.log(obj5);