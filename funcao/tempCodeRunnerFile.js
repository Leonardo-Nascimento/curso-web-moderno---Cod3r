const fabricantes = ["Mercedes", "Audi", "BMW", "Ferrari"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);