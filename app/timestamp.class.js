const moment = require('moment');

function Timestamp (unix, natural){
     this.unix = unix;
     this.natural = natural; 

 }

 Timestamp.timestampMaker = function(input){
    
    const dateFormat = "D MMM YYYY";
    if(Number.isInteger(Number(input)) && moment.unix(Number(input)).isValid()){ 
        //if the input can be converted to an integrer, use UTC conversion on it
        let inputMoment = moment.unix(Number(input));
        return new Timestamp(inputMoment.unix(),inputMoment.format(dateFormat));
    } else if(moment.utc(input,dateFormat,true).isValid()) {
        let inputMoment = moment.utc(input,dateFormat,true);
        return new Timestamp(inputMoment.unix(),inputMoment.format(dateFormat));
    } else {
        return new Timestamp(null,null);
    }
   }

 module.exports.Timestamp = Timestamp;