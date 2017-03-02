var swapi = require('swapi-node');
var _ = require('lodash');

function getCharacterByName(characterName) {
	return swapi.get(getCharacterNameUrl(characterName))
		.then((response) => {
			if (!response.count) {
				return new Error('Character name not found');
			}
			return response.results;
		})
		.then(_.first);
}

function getCharacterNameUrl(characterName) {
	return `http://swapi.co/api/people/?search=${characterName}`;
}

function getCharactersList(max) {

}

module.exports = {
	getCharacterByName,
};