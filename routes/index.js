var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/com', function(req, res, next) {
  res.render('com');
});

router.get('/BD', function(req, res, next) {
  res.render('bd');
});



module.exports = router;
