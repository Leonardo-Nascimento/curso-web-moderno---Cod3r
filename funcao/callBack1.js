const fabricantes = ["Mercedes", "Audi", "BMW", "Ferrari"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);

fabricantes.forEach( function (a) {
    console.log(a);
}
);

//usando função arrow 
fabricantes.forEach( fabricantes => console.log(fabricantes));

