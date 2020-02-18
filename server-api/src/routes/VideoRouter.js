const router =  require('express').Router()
const streaming = require('../services/streamingService');


router.get('/:moviename/', function (req, res) {

    const path = `assets/${req.params.moviename}`;
    streaming(path, req.headers.range, res);

})

module.exports = router;