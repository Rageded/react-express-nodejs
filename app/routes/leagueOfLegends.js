// app/routes/leagueOfLegends.js
const https = require('https');
const secrets = require('../environment/secrets');
const LeagueService = require('../services/LeagueOfLegendsService.js');



module.exports = function(app, db) {
  
  var leagueService = new LeagueService();
  /**
   * path: /league/summoner/name/:name
   */
  app.get('/league/summoner/name/:name', function(req, res, next) {

    let name = ( typeof req.params.name == undefined ) ? res.status(403).send({error: 'The name is undefined'}) : req.params.name;

    leagueService.getAllSummonersInfo(name, (err, result) => {
      (err) ? res.send({error: err}) : res.send(result);
    });
  }); 
    
  

};