const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const { error } = require('console')
const Post = require('./models/post')

// Config
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/sign-up', function(req, res) {
    res.render('formulario') //nome do arquivo .handlebars! sem extensao!
})

app.get('/', function(req, res) {
    Post.findAll().then(function(posts) {
        res.render('home', { posts: posts })
    })
})

app.post('/cria-post', function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        res.redirect('/')
        console.log("Post criado com sucesso")
    }).catch(function(erro) {
        res.send("Houve um erro ao tentar postar. Erro:" + erro)
        console.log("Erro: " + erro)
    })
})


app.listen(8081, function() {
    console.log("Servidor rodando em http://localhost:8081")
});