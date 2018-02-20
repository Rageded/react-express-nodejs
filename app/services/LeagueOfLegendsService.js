const LeagueOfLegendsApi = require('../apis/LeagueOfLegendsApi');
const async = require('async');

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

	/**
	 * Gets all the icons
	 * 
	 * @param  {Function} cb [description]
	 * @return {Array}      [description]
	 */
	getIcons(cb) {

		this.leagueOfLegendsApi.getRequest('/static-data/v3/profile-icons', (err, response) => {

	    if (err) {
	    	cb(Error(err));
		  } else {
		    cb(null, response);
		  }
		});
	}

	/**
	 * Will call all the icons and then get the icon with such ID
	 * @param  {Number}   id 
	 * @param {Boolean}		wether to make http request 
	 * @param  {Function} cb 
	 * @return {Array}      
	 */
	getIconById(id, makeRequest, cb) {

		if (makeRequest) {
			this.getIcons((err, res) => {
				
				if (err) {
					cb(Error(err));
				} else {
					console.log(res.data[id]);
					if (  res.data.hasOwnProperty('id') && res.data.indexOf(id) != -1) {
						cb(null, res.data[id]);
					} else {
						cb({error: ' icon not found'});
					}
				}
				
			});
		} else {
			cb(null, 'http://ddragon.leagueoflegends.com/cdn/8.1.1/img/profileicon/' + id + '.png');
		}
	}

	/**
	 * Get matches based a a users accountId
	 * 
	 * @param  {Number}   accountId 
	 * @param  {Function} cb        
	 * @return {Array}           
	 */
	getMatchesByAccountId(accountId, cb) {

		this.leagueOfLegendsApi.getRequest('/match/v3/matchlists/by-account/' + accountId, (err, response) => {

	    if (err) {
	    	cb(Error(err));
		  } else {
		    cb(null, response);
		  }
		});
	}

	getMatchById(id, cb) {

		return new Promise((resolve, reject) => {

			this.leagueOfLegendsApi.getRequest('/match/v3/matches/' + id, (err, response) => {

				if (cb) {
				    if (err) {
				    	cb(Error(err));
					  } else {
					    cb(null, response);
					  }
				} else {
					resolve(response);
				}
			});

		});
	}

	/**
	 * Get all champions
	 * 
	 * @param  {Function} cb [description]
	 * @return {[type]}      [description]
	 */
	getChampions(cb) {

		this.leagueOfLegendsApi.getRequest('/static-data/v3/champions', (err, response) => {

			if (cb) {
				if (err) {
		    	cb(Error(err));
			  } else {
			    cb(null, response);
			  }
			} else {

				return response;
			}
	    
		}, ['locale=en_US']);
	}

	getChampion(id, cb) {

		return new Promise((resolve, reject) => {

			this.leagueOfLegendsApi.getRequest('/static-data/v3/champions/' + id, (err, response) => {

				if (cb) {

				    if (err) {
			    	cb(Error(err));
				  } else {
				    cb(null, response);
				  }
				} else {
					resolve(response);
				}
			}, ['locale=en_US']);
		});

	}


	/**
	 * Will fetch all necessary information to return in one payload
	 * 
	 * @param  {[type]}   name [description]
	 * @param  {Function} cb   [description]
	 * @return {[type]}        [description]
	 */
	getAllSummonersInfo(name, cb) {

		this.getSummonerByName(name, (err, summonerResponse) => {
			if (err) {
				cb(Error(err));
			} else {

				var payload = {
					icon: {},
					matches: [],
					profile: summonerResponse

				}; //will hold all info

				async.parallel([

					(callback) => {
						this.getIconById(summonerResponse.profileIconId, false, (err, iconResponse) => {
							if(err) {
								console.log(err);
							}
							payload.icon = iconResponse;
							callback();
						});
						
					},
					 (callback) => {
						this.getMatchesByAccountId(summonerResponse.accountId, (err, matchHistoryResponse) => {

							if (err) {
								callback(err);
							}
							//only keep 5 for now
							let remove = matchHistoryResponse.matches.length - 5;
							let keep = matchHistoryResponse.matches.splice(0, remove);

							(async () => {
								for (let i = 0; i < 5; i++) {

									const response = await this.getChampion(matchHistoryResponse.matches[i].champion);
									const matchDetail = await this.getMatchById(matchHistoryResponse.matches[i].gameId);

									payload.matches.push({
										championInfo: response,
										match: matchDetail
									});

									console.log('adding champ info');
											
								}
								console.log(payload.matches);
								console.log('I am here');
								
								callback();
							})();
						
						});
						
					}
				], (err) => {

					if (err) {
						cb(Error(err));
					} else {
						cb(null, payload);
					}
				});
			}
		});
	
	}

} module.exports = LeagueOfLegendsService;