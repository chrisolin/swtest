var swapi = require('swapi-node');
var _ = require('lodash');

function getCharacterByName(characterName) {
	return swapi.get(getCharacterNameUrl(characterName))
		.then((response) => {
			if (!response.count) {
				throw new Error('Character name not found');
			}
			return response.results;
		})
		.then(_.first);
}

function getCharacterNameUrl(characterName) {
	return `http://swapi.co/api/people/?search=${characterName}`;
}

function getCharacters(max = 50) {
	var results = [];

	function getNextSet(response) {
		results = results.concat(response.results);
		if (results.length >= max) {
			return numberifyInts(results);
		} else {
			return response.nextPage()
				.then(getNextSet);
		}
	}
	return swapi.get('http://swapi.co/api/people/')
		.then(getNextSet);
}

function numberifyInts(characters) {
	const ints = ['height', 'mass'];

	return characters.map((character) => {
		ints.forEach(key => _.set(character, key, _.parseInt(character[key].replace(',', ''))));
		return character;
	})
}

module.exports = {
	getCharacterByName,
	getCharacters,
};