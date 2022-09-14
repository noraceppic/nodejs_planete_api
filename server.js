const express =require('express');

const server=express();

server.get('/',function (req,res){
    res.setHeader('content-type','text/html');
    res.status(200).send('<h1>Bienvenue dans l api  des planetes</h1>');
})

server.listen(7500,function(){
    console.log('server en marche');
});