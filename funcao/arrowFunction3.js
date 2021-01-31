let comparaComThis = function (param) {
    console.log(this === param);

}

comparaComThis(global);

const obj = {}

comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);
comparaComThis(obj);

//a função arrow trata o this como sendo parte de um modulo interno do node

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global); // global != de um modulo interno do node
comparaComThisArrow(module.exports); // isso ai é igual a um modulo do node

//tentando fazer a função arrow mudar o this
//a função arrow não muda o this mesmo que use o bind
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
