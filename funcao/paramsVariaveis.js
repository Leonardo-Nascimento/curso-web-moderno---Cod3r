//Embora a função não tenha parametros você pode sim passar parametros
//para recuperar os parametros nesse caso se usa o *arguments*
function soma() {
    let soma = 0;
    for(i in arguments){
        soma += arguments[i]
    }

    return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.3, 3.3))    
console.log(soma(1.1, 2.2, 'teste'))    
console.log(soma('a', 'b', 'c'))    

