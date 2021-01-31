let arrayOfObjects = [{"id":28,"Title":"Sweden"}, {"id":56,"Title":"USA"}, {"id":89,"Title":"England"}];

let matriz = []
let teste 

for (var i = 0; i < arrayOfObjects.length; i++) {
    var object = arrayOfObjects[i];
    //console.log(object);
    console.log(object.Title);

    matriz.push(object.Title);

} 

console.log("\nimprimindo a matriz\n");


//var matriz = [1,2,3,4];
for(var i=0; i<matriz.length; i++) {
    console.log( matriz[i]); // i é o índice, matriz[i] é o valor
} 