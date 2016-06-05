'use strict';

var Tweet = require('./../models/Tweet');
var mongoose = require('mongoose');

exports.saveTweet = function(req, res, next) {
    var body = req.body;
    var tweetObj = new Tweet({
        'tweet': body.tweet
    });

    tweetObj
        .save(function(err) {
            if (err) {
                return res.status(500).json({
                    'message': 'Error in processing your request',
                    'success': false,
                    'data': null
                });
            }
            return res.json({
                'message': 'Tweet saved successfully',
                'success': true,
                'data': tweetObj
            });
        });
};

exports.getTweets = function(req, res, next) {
    Tweet
        .find({}, function(err, tweets) {
            if (err) {
                return res.status(500).json({
                    'message': 'Error in processing your request',
                    'success': false,
                    'data': []
                });
            }
            return res.json({
                'message': 'Here are your tweets. Enjoy!',
                'success': true,
                'data': tweets
            });
        });
};

exports.updateTweet = function(req, res, next) {
    var body = req.body;
    var tweetId = req.params.id;
    var tweetObj = {
        'tweet': body.tweet,
        'updated_at': Date.now()
    };
    Tweet
        .findOneAndUpdate({ '_id': tweetId }, { '$set': tweetObj }, { 'new': true }, function(err, tweet) {
            if (err) {
                return res.status(500).json({
                    'message': 'Error in processing your request',
                    'success': false,
                    'data': null
                });
            }
            return res.json({
                'message': 'Tweet updated successfully',
                'success': true,
                'data': tweet
            })
        });
};

exports.deleteTweet = function(req, res, next) {
    var tweetId = req.params.id;

    Tweet
        .remove({ '_id': tweetId }, function(err) {
            if (err) {
                return res.status(500).json({
                    'message': 'Error in processing your request',
                    'success': false,
                    'data': null
                });
            }
            return res.json({
                'message': 'Tweet deleted successfully',
                'success': true,
                'data': null
            })
        })
};
