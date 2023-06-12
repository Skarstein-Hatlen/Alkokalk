var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res) {
  const drinks = JSON.parse(fs.readFileSync('drinks.json', 'utf8'));
  res.render('index', { drinks });
});


module.exports = router;
