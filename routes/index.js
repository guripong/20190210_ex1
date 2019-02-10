var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.send('hihihi'); //.send 문자열을 front로 보내는구나!

});

module.exports = router;
