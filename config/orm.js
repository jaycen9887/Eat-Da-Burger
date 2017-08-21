var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb){
        var sql = "SELECT * FROM " + tableName + " ORDER BY date DESC";
        connection.query(sql, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, burgerName, cb){
        var sql = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES ('" + burgerName + "', false)";
        
        connection.query(sql, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, vals, condition, cb){
        var sql = "UPDATE " + table + " SET " + vals + " WHERE " + condition;
        
        connection.query(sql, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;