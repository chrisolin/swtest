var express = require('express');
var router = express.Router();

var data = require('../data');

/* GET character. */
router.get('/:characterName', function(req, res, next) {
	data.getCharacterByName(req.params.characterName)
		.then((character) => res.render('character', character));
});

module.exports = router;
