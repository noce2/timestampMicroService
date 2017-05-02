 function ResJSON(unix, natural){
     this.unix = unix;
     this.natural = natural; //this in this instance binds to the new object created, as long as you use the "new keyword"
 }

module.exports = ResJSON;