const moment = require('moment');

/**
 * Represents my desired Timestamp result from the service
 * @unix is a unix time input
 * @natural is a string input of text date to the 'D MMM YYYY' format
 */

function Timestamp(unix, natural) {
     this.unix = unix;
     this.natural = natural;
 }

 Timestamp.timestampMaker = function(input) {
    const dateFormat = 'D MMM YYYY';
    if(Number.isInteger(Number(input))
     && moment.unix(Number(input)).isValid()) {
        // if the input can be converted to an integrer, use UTC conversion
        let inputMoment = moment.unix(Number(input));
        return new Timestamp(inputMoment.unix(),
         inputMoment.format(dateFormat));
    } else if(moment.utc(input, dateFormat, true).isValid()) {
        let inputMoment = moment.utc(input, dateFormat, true);
        return new Timestamp(inputMoment.unix(),
         inputMoment.format(dateFormat));
    } else {
        return new Timestamp(null, null);
    }
   };

 module.exports.Timestamp = Timestamp;
