function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //o q é retornado no resolve é apenas um unico parametro, se quiser retornar mais de uma informação, será nescessario colocar dentro de um objeto
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal !!!')
.then(frase => frase.concat('???'))
.then(outraFrase => console.log(outraFrase))   //pode-se usar a função 'then' quantas vezes quiser para gerar um encadeamento



