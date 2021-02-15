const _ = require('lodash')

// usando função "random" da biblioteca externa lodash
//executando o script partir da biblioteca nodemon
//comando: "nodemon usandoModulosTerceiros.js"
setInterval(() => console.log(_.random(1, 10)) , 2000);