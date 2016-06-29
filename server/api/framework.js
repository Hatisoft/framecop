var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    req.app.models.framework.find({limit: 10}).exec(function(err, result) {
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    });
});

router.get('/:lang/:page', function(req, res) {
    var limit = 10;
    var skip = parseInt(req.params.page, 10) * limit;
    req.app.models.framework.find({where: { language: req.params.lang }, skip: skip ,limit: limit}).exec(function(err, result) {
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    });
});

module.exports = router;
