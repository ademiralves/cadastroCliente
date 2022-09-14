/*var http = require('http');


http.createServer().listen(8081);

console.log("O servidor está funcionando!");*/

const express = require("express");

const app = express();

app.get("/", function(req, resp){
    resp.send("Bem-vindo ao meu app");
})

app.get("/contato", function(req, resp){
    resp.send("Página de contato do meu app");
})

app.get("/produto", function(req, resp){
    resp.send("Página de produto do meu app");
})

//sempre a última linha quando se usa a biblioteca express
app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});