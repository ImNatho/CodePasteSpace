'use strict';

var express = require('express');
global._config = require('./config.js');

var db = require('./models');
db.init(_config.db, function(connection) {
    console.log('Database connection ready!')
});

var app = express();

var server = app.listen(8080, function() {
    console.log('Web server started');
});
