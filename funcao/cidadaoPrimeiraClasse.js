//criar uma funcao
function fun1(){

}

//armazenar na variavel
const fun2 = function(){}

//Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'opa' }
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()
}

run(function() {console.log('chamando a função dentro de outra')})

//Uma função pode retornar / conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

// modo estranho
soma(2,3)(4)

//ou
const cincoMais =  soma(2,3)
cincoMais(4)