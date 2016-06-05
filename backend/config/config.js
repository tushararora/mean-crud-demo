'use strict';

/* Config object to be exposed to the app */

var config = {};


/* Database credentials */

config.mongodb = {};
config.mongodb.url = 'mongodb://localhost:27017/tweet';

/* App config */

config.app = {};
config.app.port = process.env.PORT || 3000;

module.exports = config;
