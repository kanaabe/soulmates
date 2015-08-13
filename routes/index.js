var express = require('express');
var router = express.Router();
// var request = require('superagent');
// var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soulmate' });
});

router.get('/results', function(req, res, next) {
  res.render('results', { title: 'Results' });
});

module.exports = router;
