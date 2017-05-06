const path = require('path');

const timestampMaker = require(path.resolve(process.cwd(),'./app/timestampMaker.js')).timestampMaker;


const ResJSON = require(path.resolve(process.cwd(),'./app/responsejson.class.js')).ResJSON;

const assert = require('assert');

describe('timestampMaker',function(){
    describe('timestampMaker("hi")',function(){
     it('should return {"unix":null,"natural":null}',function(){
         assert.deepEqual(timestampMaker('hi'),{unix: null,natural:null});
     });   
    });
});

