var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/com', (req, res) => {
  if(err){
      return console.error(err.message);
  }
  else{
      res.render("com.ejs");
  }
});

module.exports = router;
