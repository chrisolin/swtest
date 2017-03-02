var express = require('express');
var router = express.Router();
var _ = require('lodash');

var data = require('../data');

/* GET characters with optional sorting. */
router.get('/', function(req, res, next) {
	data.getCharacters()
		.then((characters) => {
			if (req.query.sort) {
				characters = _.sortBy(characters, req.query.sort);
			}
			res.json(characters)
		})
		.catch((err) => res.status(500).send(err));
});

module.exports = router;
