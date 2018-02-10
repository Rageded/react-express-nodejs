
const leagueOfLegends = require('./leagueOfLegends');
module.exports = function(app, db) {
  leagueOfLegends(app, db);
  // Other route groups could go here, in the future
};