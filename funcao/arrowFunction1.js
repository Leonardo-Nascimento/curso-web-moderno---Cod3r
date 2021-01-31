let dobro =  function(a){
    return 2  * a
}

// arrow function
dobro = (a) => {
    return 2 * a
}

// arrow function com retorno implícito
//ao tirar as chaves da função o return fica implícito
dobro = a => 2 * a

console.log(dobro(2));



let ola = function(){
    return 'Olá';
}

ola = () => 'Olá';

ola = _ => 'Olá'; // possui um parametro

console.log(ola());