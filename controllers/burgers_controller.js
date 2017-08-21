var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//routes go here

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){
   burger.insertOne(req.body.burger, function(){
      res.redirect("/"); 
   }); 
});

router.put("/:id", function(req, res){
    console.log(req.body);
    var condition = "id = " + req.params.id;
    var value = "devoured = " + req.body.devoured;
    console.log(condition);
    burger.updateOne(value, condition, function(){
        res.redirect("/");
    });
});

module.exports = router;