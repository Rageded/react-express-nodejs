const LeagueOfLegendsApi = require('../apis/LeagueOfLegendsApi');

class LeagueOfLegendsService {

	constructor() { 
		this.leagueOfLegendsApi = new LeagueOfLegendsApi();
	}

	/**
	 * Find a summoner by their name
	 * 
	 * @param  {String} name 
	 * @return {Array} HTTP Payload
	 */
	getSummonerByName(name, cb) {

	  this.leagueOfLegendsApi.getRequest('/summoner/v3/summoners/by-name/' + name, (err, response) => {

	    if (err) {
	    	cb(Error(err));
		  } else {
		    cb(null, response);
		  }
		});
	}

} module.exports = LeagueOfLegendsService;