var router = require('express').Router();

/* Route traffic to individual scripts */
router.use('/', require('./create'));
router.use('/:key', require('./view'));

module.exports = router;
