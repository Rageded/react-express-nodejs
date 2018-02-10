const express = require('express');
const https = require('https');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

var config = require('./app/environment/config');
//get value from config
var value = config.value;

const url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rageed?api_key=RGAPI-c33f88af-e8ba-4fdf-96a0-39f8bdff0484';

//app.use(‘/’, express.static(`${__dirname}/client/build`));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/league', (req, res) => {
    // Return user
    console.log(' I am here');
	
	https.get(url, response => {

	  response.setEncoding("utf8");
	  let body = "";
	  response.on("data", data => {
	    body += data;
	  });
	  response.on("end", () => {
	    body = JSON.parse(body);
	    console.log(
	      body
	    );

	    res.send({body: body});
	  });
	  response.on("error", () => {
	  	console.log('error');

	  	res.send({error: response});
	  });
	  
	});
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

require('./app/routes')(app, {});
app.listen(port, () => console.log(`Listening on port ${port}`));