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

    leagueService.getSummonerByName(name, (err, result) => {
      (err) ? res.send({error: err}) : res.send(result);
    });

    
    // let theUrl = secrets.leagueApi + req.params.name + '?' + secrets.key;

    // https.get(theUrl, result => {

    //   result.setEncoding("utf8");
    //   let body = "";

    //   result.on("data", data => {
    //     body += data;
    //     console.log(' in data fun');
    //   });

    //   result.on("end", () => {
    //     body = JSON.parse(body);
      
    //     res.send({body: body});
      
    //   });
    // });
  }); 
    
  

};