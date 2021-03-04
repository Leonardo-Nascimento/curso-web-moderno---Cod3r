const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()


contadorA.inc()
contadorA.inc()
//o valor do contador B vai ser o mesmo do A pois o mesmo ficou no cashe
console.log(contadorB.valor)


contadorC.inc()
contadorC.inc()
//o valor do contador D não irá se alterar pois ele usa a função factory
console.log(contadorD.valor)

