'use strict';

var express = require('express');
global._config = require('./config.js');  /* Define config as global variable */


var db = require('./db');  /* Get db scripts and init db connection */
db.init(_config.db, function(connection) {
    console.log('Database connection ready!')
});


const app = express();  /* Create express app instance */

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Set .html extension for templates */
app.set('view engine', 'html');
/* Use layout.html as the default layout */
app.set('layout', 'layout');
app.enable('view cache');
app.engine('html', require('hogan-express'));

/* Route all traffic to routing scripts */
app.use('/', require('./routes'));


app.listen(_config.port, function() {  /* Initialize the web service and log */
    console.log('Web server started');
});
