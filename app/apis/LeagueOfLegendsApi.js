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
	 * @param {Array} params 
	 * @return {String}     
	 */
	mapUrl(uri, params) {

		let paramsString = '';

		if (params) {
			for (let k in params) {
				paramsString += '&' + params[k];
			}
		}
		return secret.leagueUrl + uri + '/?' + secret.leagueKey + paramsString
	}
}

module.exports = LeagueOfLegendsApi