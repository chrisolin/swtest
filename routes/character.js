var express = require('express');
var router = express.Router();

var data = require('../data');

/* GET character. */
router.get('/:characterName', function(req, res, next) {
	data.getCharacterByName(req.params.characterName)
		.then((character) => res.render('character', character))
		.catch((err) => res.status(404).send(err));
});

module.exports = router;
