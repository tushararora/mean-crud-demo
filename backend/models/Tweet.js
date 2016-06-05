'use strict';

var mongoose = require('mongoose');

/* Define the schema for our tweet model */

var tweetSchema = new mongoose.Schema({

    tweet: {
        type: String,
        trim: true
    },
    created_at: {
        type: Date,
        'default': Date.now
    },
    updated_at: {
        type: Date,
        'default': Date.now
    }

});

/* Create the model for tweets and expose it to our app */

module.exports = mongoose.model('Tweet', tweetSchema);
