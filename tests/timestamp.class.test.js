const path = require('path');

const Timestamp = require(path.resolve(process.cwd(),'./app/timestamp.class.js')).Timestamp;
//the above directory is valid because the code will be initiated from package json in root
const assert = require('assert');

describe('Timestamp Class',function(){
    const result = {"unix":null,"natural":null};
    describe('TimestampMaker.timestampMaker("hi")',function(){
     it(`should return ${result}`,function(){
         assert.deepEqual(Timestamp.timestampMaker('hi'),result);
     });   
    });

    describe('TimestampMaker.timestampMaker("6 May 2017")',function(){
     it('should return {"unix":1494028800,"natural":"6 May 2017"}',function(){
         assert.deepEqual(Timestamp.timestampMaker('6 May 2017'),{"unix":1494028800,"natural":"6 May 2017"});
     });   
    });

    describe('TimestampMaker.timestampMaker("1494159294")',function(){
     it('should return {"unix":1494159294,"natural":"7 May 2017"}',function(){
         assert.deepEqual(Timestamp.timestampMaker("1494159294"),{"unix":1494159294,"natural":"7 May 2017"});
     });   
    });
});

