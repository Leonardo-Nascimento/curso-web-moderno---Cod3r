const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const soMulheres = funcionarios => funcionarios.genero === 'F' && funcionarios.pais === 'China'    
const menorSario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const arraySalarioDasMulheres = funcionarios.filter(soMulheres)
    console.log(arraySalarioDasMulheres.reduce(menorSario))
})