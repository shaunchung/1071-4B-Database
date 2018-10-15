var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '405630400', name: '鍾雄任', title: 'Tamkang University' });
});

module.exports = router;