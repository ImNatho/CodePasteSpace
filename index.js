'use strict';

var express = require('express');
global._config = require('./config.js');  /* Define config as global variable */


var db = require('./db');  /* Get db scripts and init db connection */
db.init(_config.db, function(connection) {
    console.log('Database connection ready!')
});


var app = express();  /* Create app instance */
app.use('/', require('./routes'));  /* Route all traffic to routing scripts */


app.listen(_config.port, function() {  /* Initialize the web service and log */
    console.log('Web server started');
});
