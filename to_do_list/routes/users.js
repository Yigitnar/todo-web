'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});
router.get('/:id', function (req, res) {
    var id = req.params.id;
    res.send('respond with a resource with id:' + id.toString());
});
module.exports = router;
