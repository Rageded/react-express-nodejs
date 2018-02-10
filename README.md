# react-express-nodejs

## installing
 
 In order to install  node.js dependencies in root folder:

 `npm install`

 then to install client side dependencies

 `cd client; npm install`

## secrets

create a file in `/environment` named `secrets.js`

and add the attributes:
`module.exports = {
	leagueKey: 'league of legends key here',
	leagueUrl: 'https://na1.api.riotgames.com/lol'
}`

 go back to root folder, and start dev

`npm run dev`

open on localhost:3000

this uses a proxy to have both client and server open at the same time