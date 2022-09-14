const sqlite3 = require("sqlite3").verbose();
const dbname = "univers.db";

let db = new sqlite3.Database(dbname, (err) => {
  if (err) throw err;
  console.log("Base de donnée initialisé dans le fichier : " + dbname);
});

  db.run(
  "CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY AUTOINCREMENT , name VARCHAR(25) , image varchar(255)  ,created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)"
);  
// db.run("INSERT INTO planetes(name,image) values (?,?)",["Venus","https://wallpapercave.com/wp/wp2248862.jpg"]);
// db.run("INSERT INTO planetes(name,image) values (?,?)", ["Terre","https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/planete-terre.jpg"]);
// db.run("INSERT INTO planetes(name,image) values (?,?)", ["Mercure","https://www.lesystemesolaire.com/Files/Image/La-planete-Mercure.jpg"]); 
// db.run("INSERT INTO planetes(name,image) values (?,?)", ["Mars","https://th.bing.com/th/id/R.aebf01f54fbb2d0692492de541e27d89?rik=Ccjx9xCu3Sc3OA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Sjfq6BDBRFM%2fUuO6FkcdR6I%2fAAAAAAAAGwo%2fchO48ldMOi4%2fs1600%2fmars-planet.jpg&ehk=jPycRxmXqM4JoG2JUgasWVZgvju4VkGQDV4%2fNHVqyEg%3d&risl=&pid=ImgRaw&r=0"]);
    
  db.all("SELECT * FROM planetes", (err, data) => {
        if (err) throw err;
        console.log(data);
      })  