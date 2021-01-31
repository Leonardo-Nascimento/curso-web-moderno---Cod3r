//as vezes retorna um valor , as vezes não
function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else{
        return area
    }
}


console.log(area(2,2)) // retorna area
console.log(area(2)) //retorna NAN
console.log(area()) //retorna NAN
console.log(area(2,3,4,5,7)) //pega os dois primeiros e desconsidera os outros parametros
console.log(area(5,5)) // retorna o console.log

