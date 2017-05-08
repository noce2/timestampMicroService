const express = require('express');
const path = require('path');

const Timestamp = require(path.resolve('./app/timestamp.class.js')).Timestamp;

const port = 3000;
let myapp = express();


/* ROUTING */
myapp.get('/', function(req, res) {
    res.send('Welcome to My Microservice');
});

myapp.get('/:what', function(req, res) {
    res.json(Timestamp.timestampMaker(req.params.what));
});


/* START UP SERVER*/

myapp.listen(port, function() {
    // console.log(`Currently listening on port ${port}`);
});
