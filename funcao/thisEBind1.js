const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();

//dessa forma um conflito pois falar() está em um outro contexto
const falar = pessoa.falar
falar()

//dessa forma o bind vai referenciar o devido objeto dono da função
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()