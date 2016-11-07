var Router = require('express').Router();

Router.get('/', function(req, res) {
    res.send('Create paste');
});

/* Alternate POST creation method */
Router.post('/', function(req, res) {
    res.send('Create paste');
});

module.exports = Router;
