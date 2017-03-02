var express = require('express');
var router = express.Router();

/* GET planet residents listings. */
router.get('/', function(req, res, next) {
  res.send('planetresidents');
});

module.exports = router;
