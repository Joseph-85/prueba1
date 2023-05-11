const express = require(express);
const router = express.Router();

const sqlite3 = require("sqlite3").verbose();

const create_table = "CREATE TABLE IF NOT EXISTS For1 (Nombre VARCHAR (50) NOT NULL PRIMARY KEY AUTOINCREMENT,email Email NOT NULL, Comentario VARCHAR(10000)NOT NULL,date DATETIME NOT NULL, time TEXT NOT NULL, ip TEXT NOT NULL)";

const insert_into ="INSERT INTO For1 (Nombre, email, Comentario,date,time,ip) VALUES(?,?,?,?,?,?)";

const select_all= "SELECT * FORM For1";

const db = new sqlite3.Database(":memory:",(err) =>{
    if (err) {
        return console.error(err.message);
    }
    console.log("Ready!");
    db.run(create_table);
});

route.get("/", (req,res) => {
    res.render("index",{title: "Express"});
});

router.get("/views",(req,res) =>{
    res.rende("com.ejs");
});

router.post("/views", (req,res) =>{

let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
let dt = new Date();
let time = ""

if(dt.getHours() >=12){
    time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "PM"; 
}
else{
    time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "AM";
}
 
let _date = dt.toLocaleString();
let date = "";

for (let d = 0; d  <= 9; d++) {
    if(_date[d] == "/"){
        date +="-";
        continue;
    }
    else if(_date[d]== ","){
        continue;
    }
    date += _date[d];
}


if(ip){
    let ip_ls = ip.split(",");
    ip = ip_ls[ip_ls.length -1];
}
else{
    console.log("IP no se pudo formatiar");
}
})


module.exports = router;