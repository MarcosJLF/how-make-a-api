const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

app.use(bodyParser.json());

const menu = { 
    '1':"lista de compras",
    '2': "Cadastrar um produto",
    '3': "estoque",
    '4': "Remover um produto"
}

// # exibindo um objeto

app.get('/menu', function(req, res){
    res.status(200).json({"Ope":menu})
})


// # recebendo corpo em body, e manipulando

app.post('/menu/add', (req,res) => {
    const {body} = req

    res.status(200).json(body)
})








// # Recebendo params, value e key e manipulando

 app.get('/porta/:number',function(req, res){
     const number = req.query.number

     res.status(200).json({'Enter':number})
 } )








// # como criar caminhos em uma API 

app.get('/portas', (req,res) => {
    res.status(200).json({'Portas Disponível': ["um", "dois", "três"]});
})

// usar um array para para listar as portas disponível

app.get('/porta/01', (req, res) => {
    res.status(200).json({'Porta':"um"})
})

app.get('/porta/01/02', (req, res) => {
    res.status(200).json({'Porta':"dois"})
})

app.get('/porta/01/02/03', (req, res) => {
    res.status(200).json({'Porta':"três"})
})

/*  */





// #  armazenar em uma variavel permiti manipular de forma eficiente, criando um porta rápido e fácil

const porta = 8000

app.listen(porta, () => {

    console.log("Rodando na porta "+porta) 
})

/*  Ao colocar a porta em uma variavel você possíbilita o controle mais rápido e fácil */