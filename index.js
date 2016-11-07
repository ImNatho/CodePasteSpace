'use strict';

var express = require('express');
global._utils = require('./utils');


var db = require('./db');  /* Get db scripts and init db connection */
db.init(process.env.MONGO, function(connection) {
    console.log('Database connection ready!')
});


const app = express();  /* Create express app instance */

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('express-useragent').express())

/* Set .html extension for templates */
app.set('view engine', 'html');
/* Use layout.html as the default layout */
app.set('layout', 'layout');
app.enable('view cache');
app.engine('html', require('hogan-express'));

/* Static routing - production will use nginx to access file directly. */
app.use('/static', express.static(__dirname + '/static'));

/* Route all traffic to routing scripts */
app.use('/', require('./routes'));

app.listen(process.env.PORT || 8080, function() {  /* Initialize the web service and log */
    console.log('Web server started');
});
