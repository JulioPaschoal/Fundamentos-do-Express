const express = require("express"); //IMportando o express
const app = express(); //Inicianod o express


//Criando rotas 
app.get("/", function (req, res) {
    res.send("Bem ao meus site!")
});

app.get("/blog/:artigo?", function (req, res) {

    var artigo = req.params.artigo;
    if (artigo) {
        res.send("<h2>Artigo: " + artigo + "</h2>");
    } else {
        res.send("Bem vindo ao meu blog");
    }


});

app.get("/canal/youtube", function (req, res) {
    res.send("<h1>Bem ao meu canal no youtube</h1>");
});
app.get("/ola/:nome/:empresa", function (req, res) {
    // REQ => DADOS ENCIADOS PELO USUARIO
    // RES => RESPOSTA QUE VAI SER ENVIADA AO USUARIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>");
});


app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});