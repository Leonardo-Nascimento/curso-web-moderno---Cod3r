const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}) 
    
aprovados.forEach((nome, indice) => console.log(nome, indice))