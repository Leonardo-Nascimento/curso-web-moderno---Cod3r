const obj = {a:1, b:2, c:3, soma(){return a + b + c}}

//vai excluir a função soma 
//pois ele será tranformado em um simples texto
console.log(JSON.stringify(obj))

//forma errada de se criar um json
// console.log(JSON.parse("{a:1, b:2, c:3}"))

//forma correto de se criar um json
//tem que usar aspas duplas nos atributos
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
