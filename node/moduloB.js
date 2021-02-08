//para criar um modulo e exportalo usando a abordagem de criar um novo objeto substituindo o this  vazio ( {} )
// tem que ser dessa forma

//observação: se usar apenas o "exports = { }" irá retornar undefined

module.exports = {
    bomDia : 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}