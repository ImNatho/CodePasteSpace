var mongoose = require('mongoose');
module.exports = {
    init: function(uri, callback) {
        /* Set promise library to nodejs default */
        mongoose.Promise = global.Promise;

        /* connect to database and create connection listener */
        mongoose.connect(uri);
        mongoose.connection.once('open', function() {
            /* Store paste model in global vars */
            global.Paste = this.Paste;

            /* Callback to init origin */
            callback(mongoose.connection);
        });
    },
    Paste: require('./paste')
}
