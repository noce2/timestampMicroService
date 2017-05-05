const express = require('express');
var moment = require('moment');
const path = require('path');
const ResponseJSON = require(path.resolve('./routes/ResponseJSONCLass.js'));


const port = 3000;
var myapp = express();




/* ROUTING */
myapp.get('/',function(req,res){
    res.send("Welcome to My Microservice")
});

myapp.get('/:what',function(req,res){
    res.json(genUnixAndNaturalDate(req.params.what));
});


/*START UP SERVER*/ 

myapp.listen(port,function(){
    console.log(`Currently listening on port ${port}`);
});

function genUnixAndNaturalDate(input){
    const dateFormat = "D MMM YYYY";
    if(Number.isInteger(Number(input)) && moment.unix(Number(input)).isValid()){ //if the input can be converted to an integrer, use UTC conversion on it
        let inputMoment = moment.unix(Number(input));
        return new ResponseJSON(inputMoment.valueOf(),inputMoment.format(dateFormat));
    } else if(moment.utc(input,dateFormat,true).isValid()) {
        let inputMoment = moment.utc(input,dateFormat,true);
        return new ResponseJSON(inputMoment.valueOf(),inputMoment.format(dateFormat));
    } else {
        return new ResponseJSON(null,null);
    }
   }
