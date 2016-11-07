var router = require('express').Router();

/* Route traffic to individual scripts */
router.use('/', require('./create'));
router.use('/:paste', require('./view'));

module.exports = router;
