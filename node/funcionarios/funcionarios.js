const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const soMulheres = funcionarios => funcionarios.genero === 'M' && funcionarios.pais === 'China'

    const salarios = funcionarios => funcionarios.salario 
    
    const maiorSalario = salario => {
        let maior = 0

        if(salario > maior){
            maior = salario
            return maior
        }
        
    }

     
    console.log(funcionarios.filter(soMulheres).map(salarios))
    

    console.log(`total de funcionarias mulheres: ${soMulheres.length} mulheres`)


})