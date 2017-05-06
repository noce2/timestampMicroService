const express = require('express');
const moment = require('moment');
const path = require('path');

const timestampMaker = require(path.resolve('./app/timestampMaker.js')).timestampMaker;

const port = 3000;
var myapp = express();




/* ROUTING */
myapp.get('/',function(req,res){
    res.send("Welcome to My Microservice")
});

myapp.get('/:what',function(req,res){
    res.json(timestampMaker(req.params.what));
});


/*START UP SERVER*/ 

myapp.listen(port,function(){
    console.log(`Currently listening on port ${port}`);
});
