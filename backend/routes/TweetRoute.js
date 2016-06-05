'use strict';

var express = require('express');
var router = express.Router();
var TweetController = require('./../controllers/TweetController');

module.exports = router;

/* Get Tweets */
router.get('/', [
    TweetController.getTweets
]);

/* Save Tweet */
router.post('/', [
    TweetController.saveTweet
]);

/* Update Tweet */
router.put('/:id', [
    TweetController.updateTweet
]);

/* Delete Tweet */
router.delete('/:id', [
    TweetController.deleteTweet
]);
