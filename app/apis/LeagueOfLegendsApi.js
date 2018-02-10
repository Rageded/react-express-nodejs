const ApiWrapper = require('./ApiWrapper');
const secret = require('../environment/secrets');

/**
 * [export description]
 * @type {Object}
 */
 class LeagueOfLegendsApi extends ApiWrapper {

	constructor() {
		super();
	}

	/**
	 * Overwritting logic for league
	 * 
	 * @param  {String} uri 
	 * @return {String}     
	 */
	mapUrl(uri) {
		return secret.leagueUrl + uri + '/?' + secret.leagueKey
	}
}

module.exports = LeagueOfLegendsApi