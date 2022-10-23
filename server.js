const express =require('express');
const sqlite3 = require("sqlite3").verbose();
const dbname = "univers.db";
const cors = require("cors");



server.use(cors());



const server=express();


let db = new sqlite3.Database(dbname, (err) => {
    if (err) throw err;
    console.log("Base de donnée initialisé dans le fichier : " + dbname);
  });

server.get('/',function (req,res){
    req.setHeader('content-type','text/html');
    res.status(200).send('<h1>Bienvenue dans l api  des planetes</h1>');
})

server.listen(7500,function(){
    console.log('server en marche');
});

server.get('/planetes', (req, res)=>{
    res.setHeader('content-type','application/json');
    db.all("SELECT * FROM planetes", (err, data) => {
        if (err) throw err
        res.status(200).send(JSON.stringify(data))
      })
   
})

;
