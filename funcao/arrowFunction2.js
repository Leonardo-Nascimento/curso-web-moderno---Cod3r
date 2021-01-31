function Pessoa(){
    this.idade = 0

    // na aula thisBind2 a função foi criada normalmente da função setInterval
    //aki a function foi criada na forma de arrow function dentro da função setInterval
    //Dessa forma não é preciso colocar o bind pois o this de fato aponta para idade
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    },1000)
}

new Pessoa 