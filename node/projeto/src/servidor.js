const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


// app.get('/produtos', (req, res, next) =>{
//     console.log("Middleware 1 ...");
//     next();    
// })

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) =>{
    //res.send({nome: 'Notebook', preco:123.45}); // vai se converter em um json
    res.send(bancoDeDados.getProdutos())
});


app.get('/produtos/:id', (req, res, next) =>{    
    res.send(bancoDeDados.getProduto(req.params.id)) //usa-se "req.params.id" para pegar o parametro passado na url
});

app.post('/produtos',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, // usa-se "req.body.name" para pegar o parametro passado no corpo da requisição
        preco: req.body.preco
    });
    res.send(produto); // JSON que será retornado
})

app.put('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, // usa-se "req.body.name" para pegar o parametro passado no corpo da requisição
        preco: req.body.preco
    });
    res.send(produto); // JSON que será retornado
})

app.delete('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto); // JSON que será retornado
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})