/*var http = require('http');


http.createServer().listen(8081);

console.log("O servidor está funcionando!");*/

const express = require("express");

const app = express();

//sempre a última linha quando se usa a biblioteca express
app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});