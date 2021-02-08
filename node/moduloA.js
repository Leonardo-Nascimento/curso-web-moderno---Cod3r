//Essa linha irá imprimir um objeto vazio, pois o this é um objeto sem nenhuma propriedade previamente criada
//console.log(this)

this.ola = 'Fala pessoa'

exports.bemVindo = 'Bem vindo ao node!'

module.exports.ateLogo = 'Até próximo exemplo'

//foram criadas  de formas diferentes 3 propriedades no objeto this

/*
{
  ola: 'Fala pessoa',
  bemVindo: 'Bem vindo ao node!',
  ateLogo: 'Até próximo exemplo'
}
*/