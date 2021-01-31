const Sequencia = {
    _valor: 1,
    get valor(){return this._valor++},
    
    set valor(valor){
       if(valor > this.valor){
           this._valor = valor
       }
    }
}

console.log(Sequencia.valor, Sequencia.valor)

Sequencia.valor = 1000
console.log(Sequencia.valor, Sequencia.valor)