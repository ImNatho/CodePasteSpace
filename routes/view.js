var Router = require('express').Router({mergeParams: true});

Router.use(function(req, res, next) {
    Paste.find().limit(1).exec(function(err, data) {
        if(data.length != 1) { next(); return; }
    })
});

Router.get('/', function(req, res) {
    res.send('get paste ' + req.params.paste);
});

/* Alternate JSON response */
Router.get('/json', function(req, res) {
    res.json({ paste: req.params.paste });
});

/* Alternate raw response */
Router.get('/raw', function(req, res) {
    res.send('Get raw paste: ' + req.params.paste);
});

module.exports = Router;
