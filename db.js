var mysql = require('mysql2');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'shahmeer27',
    database : 'pharmacy'
});

db.connect(err=>{
    if(err) 
        console.log("Error Occured")
    else
        console.log("Connected to database")
});

module.exports = db;