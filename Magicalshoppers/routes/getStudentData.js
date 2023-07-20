var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    name:"Teena",
    age: 25,
    gender: 'Male'
  };
  res.send(JSON.stringify(data));

});

module.exports = router;
