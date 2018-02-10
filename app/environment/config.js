var config = {};
//development
var env = process.env.NODE_ENV || 'development';
if(env === 'development'){
  config = require('./development');
}else if (env === 'test'){
    config = require('./test');
} else if(env === 'production'){
    config = require('./production');
}

module.exports = config;