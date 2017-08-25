var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "bb7caa8cec3cbf",
    password: "39728c71",
    database: "heroku_32700f8a4e1eb01"
});

connection.connect(function(err){
   if(err) throw err;
    
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;

/*mysql.createConnection({
    port: "3306",
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});*/


/*  port: "5432",
    host: "ec2-54-163-237-25.compute-1.amazonaws.com",
    user: "hwycyfeedyopth",
    password: "dcb4c8c33f7795e1c0bf82aa7a57cd4a03fd60e8de2d7baae666d83e928bbe51",
    database: "d8au0ur2r86rav"*/