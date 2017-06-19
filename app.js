const express = require('express');
const path = require('path');

const Timestamp = require(path.resolve('./app/timestamp.class.js')).Timestamp;


let myapp = express();


myapp.use('/public', express.static(path.join(__dirname, 'public')));

myapp.set('port', (process.env.PORT || 5000));
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

myapp.listen(myapp.get('port'), function() {
    console.log(`Currently listening on port ${myapp.get('port')}`);
});
