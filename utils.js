module.exports = {
    timeSinceReadable: function(seconds) {
        if (Math.floor(seconds / 31536000) > 1) {
            return Math.floor(seconds / 31536000) + ' year' + (Math.floor(seconds / 31536000)==1?'':'s');
        }
        if (Math.floor(seconds / 2592000) > 1) {
            return Math.floor(seconds / 2592000) + ' month' + (Math.floor(seconds / 2592000)==1?'':'s');
        }
        if (Math.floor(seconds / 86400) > 1) {
            return Math.floor(seconds / 86400) + ' day' + (Math.floor(seconds / 86400)==1?'':'s');
        }
        if (Math.floor(seconds / 3600) > 1) {
            return Math.floor(seconds / 3600) + ' hour' + (Math.floor(seconds / 3600)==1?'':'s');
        }
        if (Math.floor(seconds / 60) > 1) {
            return Math.floor(seconds / 60) + ' minute' + (Math.floor(seconds / 60)==1?'':'s');
        }
        return Math.floor(seconds) + ' second' + (Math.floor(seconds)==1?'':'s');
    }
}
