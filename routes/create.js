var Router = require('express').Router();

Router.get('/', function(req, res) {
    res.render('create');
});

/* Alternate POST creation method */
Router.post('/', function(req, res) {
    if(!req.body.paste || req.body.paste == '') {
        res.locals = { message: 'You need to paste something!' };
        res.status(400).render('create', { partials: { error: 'create-error' } });
        return;
    }

    if(req.body.paste.length > 10000) {
        res.locals = { message: 'Maximum paste size is 10,000 characters!', data: req.body.paste };
        res.status(400).render('create', { partials: { error: 'create-error' } });
        return;
    }

    if(req.body.creator.length > 24) {
        res.locals = { message: 'Maximum creator name length is 24 characters!', data: req.body.paste };
        res.status(400).render('create', { partials: { error: 'create-error' } });
        return;
    }

    var key = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for( var i=0; i < 5; i++ ) key += possible.charAt(Math.floor(Math.random() * possible.length));

    var paste = new Paste({
        key: key,
        data: req.body.paste,
        creator: {
            name: (req.body.creator ? req.body.creator : 'Unknown'),
            user_agent: {
                platform: req.useragent.platform,
                browser: req.useragent.browser,
                version: req.useragent.version
            }
        }
    });

    paste.save(function(err, data) {
        res.redirect('/' + data.key);
    });

});

module.exports = Router;
