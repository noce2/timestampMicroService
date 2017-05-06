const moment = require('moment');
const ResJSON = require('./responsejson.class').ResJSON;

module.exports.timestampMaker = function (input){
    
    const dateFormat = "D MMM YYYY";
    if(Number.isInteger(Number(input)) && moment.unix(Number(input)).isValid()){ //if the input can be converted to an integrer, use UTC conversion on it
        let inputMoment = moment.unix(Number(input));
        return new ResJSON(inputMoment.valueOf(),inputMoment.format(dateFormat));
    } else if(moment.utc(input,dateFormat,true).isValid()) {
        let inputMoment = moment.utc(input,dateFormat,true);
        return new ResJSON(inputMoment.valueOf(),inputMoment.format(dateFormat));
    } else {
        return new ResJSON(null,null);
    }
   }