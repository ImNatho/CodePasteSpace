var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Paste = new Schema({
    key: { type: String, index: true },
    data: String,
    data_type: { type: String, default: 'text' },
    creator: {
        name: { type: String, default: 'Unknown' },
        user_agent: {
            platform: String,
            browser: String,
            version: String
        }
    },
    removed: {
        removed: { type: Boolean, default: false },
        remove_reason: String
    },
    meta: {
        created_on: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    }
});

module.exports = mongoose.model('Paste', Paste);
