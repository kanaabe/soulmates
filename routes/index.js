var express = require('express');
var router = express.Router();
// var request = require('superagent');
// var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname+'/../views/index.html'));
  res.render('index', { title: 'Soulmate' });
  // request
  //   .post('https://api.typeform.io/latest/forms')
  //   .send({
  //     "title": "My first typeform",
  //     "fields": [
  //       {
  //         "type": "short_text",
  //         "question": "What is your name?"
  //       }
  //     ]
  //     })
  //   .set('X-API-TOKEN', process.env.TYPEFORM_TOKEN)
  //   .set('Accept', 'application/json')
  //   .end(function(err, res){
  //           console.log(res.body.id);
  //   });
});

router.get('/results', function(req, res, next) {
  res.render('results', { title: 'Results' });
});

module.exports = router;
