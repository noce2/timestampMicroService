const express = require('express');
const path = require('path');
const ResponseJSON = require(path.resolve('./routes/ResponseJSONCLass.js'));


const port = 3000;
var myapp = express();




/* ROUTING */
myapp.get('/',function(req,res){
    res.send("Welcome to My Microservice")
});

myapp.get('/:what',function(req,res){
    //write function that will figure out what kind of text I have
    var responseJSON = new ResponseJSON(101,req.params.what);
    res.json(responseJSON);
});


/*START UP SERVER*/ 

myapp.listen(port,function(){
    console.log(`Currently listening on port ${port}`);
});