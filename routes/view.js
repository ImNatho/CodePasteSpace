var Router = require('express').Router({mergeParams: true});

/* Redirect if key is not uppercase */
Router.use(function(req, res, next) {
    if(req.params.key != req.params.key.toUpperCase()) {
        return res.redirect('/' + req.params.key.toUpperCase());
    }
    next();
});

/* Get paste object and store in req object. */
Router.use(function(req, res, next) {
    Paste.find({ key: req.params.key }).limit(1).exec(function(err, data) {
        if(data.length != 1) {
            res.status(404).render('404');
            return;
        }

        var paste = data[0];
        if(paste.removed.removed) {
            res.status(410).render('410');
            res.send('Paste has been removed by an administrator. Reason: ' + paste.removed.reason);
            return;
        }
        req.paste = paste;
        next();
    });
});

/* Retrieve paste request */
Router.get('/', function(req, res) {
    res.locals = { data: req.paste.data, name: req.paste.creator.name, age: _utils.timeSinceReadable((new Date().getTime() - req.paste.meta.created_on.getTime())/1000) + ' ago'};
    res.render('view');
});

/* Alternate JSON response */
Router.get('/json', function(req, res) {
    res.json({
        key: req.paste.key,
        type: req.paste.data_type,
        paste: req.paste.data,
        creator: req.paste.creator.name,
        created_on: req.paste.meta.created_on
    });
});

/* Alternate raw response */
Router.get('/raw', function(req, res) {
    res.send(req.paste.data);
});

module.exports = Router;
