'use strict';

/* Modules */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var colors = require('colors');
var app = express();
var config = require('./config/config');
var apiRoutes = require('./routes/index');

/**
 * Connection to DB
 */

require('./config/db');

/**
 * Middleware
 */

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.raw({
    limit: 10000000000
}));

app.use(bodyParser.json({
    limit: 10000000
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, './../frontend')));

app.use(function(req, res, next) {

    /* Log each request to the console */

    if (req.method === "GET") {
        console.log(colors.green(req.method), req.url);
    } else {
        console.log(colors.yellow(req.method), req.url);
    }

    /* Continue doing what we were doing and go to the route */

    next();
});

/* Routes */

app.use('/api', apiRoutes);

app.use('/', function(req, res) {
    return res.sendFile(path.join(__dirname, './../frontend/app.html'));
});

app.listen(config.app.port, function() {
    console.log("App listening on port " + config.app.port);
})

module.exports = app;
