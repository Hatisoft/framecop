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

module.exports = router;
