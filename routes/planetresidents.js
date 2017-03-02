var express = require('express');
var router = express.Router();

var data = require('../data');

/* GET planet residents listings. */
router.get('/', function(req, res, next) {
	data.getPlanetResidents()
		.then((planets) => res.json(planets))
		.catch((err) => res.status(500).send(err));
});

module.exports = router;
