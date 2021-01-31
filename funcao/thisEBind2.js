//DA ERRO POIS O THIS NESSE CASO NAO APONTA PARA A IDADE DA FUNÇÃO PESSOA

// function Pessoa(){
//     this.idade = 0

//     setInterval(function(){
//         this.idade++;
//         console.log(this.idade);
//     },1000)
// }


//ASSIM DA CERTO POIS O BIND FAZ COM QUE APONTE PARA A IDADE DA FUNÇÃO PESSOA
function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(this),1000)
}
new Pessoa 

//ASSIM DA CERTO POIS A CONSTANTE IRÁ REPRESENTAR O THIS QUE POR SUA VEZ É A IDADE DA FUNÇÃO PESSOA
// DESSA FORMA NÃO PRECISA DO BIND
function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    },1000)
}


new Pessoa 