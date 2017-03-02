var express = require('express');
var router = express.Router();

/* GET characters listing. */
router.get('/', function(req, res, next) {
  res.send('characters');
});

module.exports = router;
