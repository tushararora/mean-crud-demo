'use strict';

var express = require('express');
var router = express.Router();
var TweetRoute = require('./TweetRoute');


router.use('/tweets', TweetRoute);
module.exports = router;
