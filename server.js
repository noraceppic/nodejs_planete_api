const express =require('express');
const sqlite3 = require("sqlite3").verbose();
const dbname = "univers.db";
const cors = require("cors");
const port = 7500;



const server=express();

server.use(cors());

let db = new sqlite3.Database(dbname, (err) => {
    if (err) throw err;
    console.log("Base de donnée initialisé dans le fichier : " + dbname);
  });


server.listen(port,()=>{
    console.log(`|server en marche sur  ${port}`);
});


server.get('/', (req,res)=>{
    res.status(200).send('<h1>Bienvenue dans l api  des planetes</h1>');
})



server.get('/planetes', (req, res)=>{
    res.setHeader('content-type','application/json');
    db.all("SELECT * FROM planetes", (err, data) => {
        if (err) throw err
        res.status(200).send(JSON.stringify(data))
      })
   
})

;
