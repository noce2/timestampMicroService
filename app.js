const express = require('express');
const path = require('path');

const Timestamp = require(path.resolve('./app/timestamp.class.js')).Timestamp;

const port = 3000;
let myapp = express();


myapp.use('/public', express.static(path.join(__dirname, 'public')));

myapp.set('views', './views');
myapp.set('view engine', 'pug');


/* ROUTING */
myapp.get('/', function(req, res) {
    res.render('index');
});

myapp.get('/:what', function(req, res) {
    res.json(Timestamp.timestampMaker(req.params.what));
});


/* START UP SERVER*/

myapp.listen(port, function() {
    // console.log(`Currently listening on port ${port}`);
});
