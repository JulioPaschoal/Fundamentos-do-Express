const express = require("express"); //IMportando o express
const app = express(); //Inicianod o express


//Criando rotas 
app.get("/", function(req,res){
    res.send("Bem ao meus site!")
});

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog");
});

app.get("/canal/youtube", function(req,res){
    res.send("<h1>Bem ao meu canal no youtube</h1>");
});


app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});