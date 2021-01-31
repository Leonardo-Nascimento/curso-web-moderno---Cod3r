// var arrayObj= [{"id":28,"Title":"Sweden"}, {"id":56,"Title":"USA"}, {"id":89,"Title":"England"}];

// console.log(arrayObj);

var data = {
    "carros": [{
        "fabricante": "fiat",
            "modelo": "palio",
            "ano": "2013",
            "combustivel": "gasolina"
    }, {
        "fabricante": "volkswagen",
            "modelo": "fusca",
            "ano": "1986",
            "combustivel": "gasolina"
    }, {
        "fabricante": "gm",
            "modelo": "prisma",
            "ano": "2011",
            "combustivel": "gasolina"
    }, {
        "fabricante": "ferrari",
            "modelo": "enzo",
            "ano": "1998",
            "combustivel": "gasolina"
    }, {
        "fabricante": "gm",
            "modelo": "cruze",
            "ano": "2015",
            "combustivel": "flex"
    }, {
        "fabricante": "fiat",
            "modelo": "500",
            "ano": "1988",
            "combustivel": "etanol"
    }, {
        "fabricante": "ford",
            "modelo": "focus",
            "ano": "2013",
            "combustivel": "flex"
    }, {
        "fabricante": "ford",
            "modelo": "ranger",
            "ano": "2016",
            "combustivel": "diesel"
    }, {
        "fabricante": "fiat",
            "modelo": "linea",
            "ano": "2013",
            "combustivel": "flex"
    }, {
        "fabricante": "gm",
            "modelo": "camaro",
            "ano": "2013",
            "combustivel": "gasolina"
    }]
};

var array = []

//var elemento = document.getElementById("lista");
for (var i = 0; i < data.carros.length; i++) {
    var carro = data.carros[i];
    console.log(carro.modelo);
    
} 