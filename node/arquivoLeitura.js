const { Console } = require('console')
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//exemplo sincrono
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo);


//exemplo assincrono
fs.readFile(caminho,'utf-8', (err, conteudo) => {

    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


//maneira pratica de se carregar um arquivo json
const config = require('./arquivo.json')
console.log(config)


// Lendo diretorio raiz da pasta node
fs.readdir(__dirname ,(err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})