'use strict';

angular
    .module('root')
    .controller('TweetController', ['$scope', '$http', function($scope, $http) {

        var updateObj = {};

        $scope.tweet = {
            text: '',
            showSave: true
        };
        $scope.tweetList = [];
        $scope.saveTweet = function() {

            if ($scope.tweet.text === '') {
                return false;
            }

            $http
                .post('/api/tweets', {
                    'tweet': $scope.tweet.text
                })
                .then(function(res) {
                    if (res.status === 200) {
                        $scope.tweetList.push(res.data.data);
                        $scope.tweet.text = '';
                    } else {
                        /* Handle error */
                    }
                }, function(res) {
                    /* Handle error */
                });
        };

        $scope.getTweets = function() {
            $http
                .get('/api/tweets')
                .then(function(res) {
                    if (res.status === 200) {
                        $scope.tweetList = res.data.data;
                    } else {
                        /* Handle error */
                    }
                }, function(res) {
                    /* Handle error */
                });
        };

        $scope.editTweet = function(tweet, index) {
            $scope.tweet.showSave = false;
            $scope.tweet.text = tweet.tweet;
            updateObj = tweet;
            updateObj.index = index;
        };

        $scope.cancel = function() {
            $scope.tweet.text = '';
            $scope.tweet.showSave = true;
        };

        $scope.updateTweet = function() {

            if ($scope.tweet.text === '') {
                return false;
            }

            $http
                .put('/api/tweets/' + updateObj._id, {
                    'tweet': $scope.tweet.text
                })
                .then(function(res) {
                    if (res.status === 200) {
                        $scope.tweetList[updateObj.index] = res.data.data;
                        $scope.tweet = {
                            'text': '',
                            'showSave': true
                        };
                        updateObj = {};
                    } else {
                        /* Handle error */
                    }
                }, function(res) {
                    /* Handle error */
                });
        };

        $scope.deleteTweet = function(tweet, index) {
            $http
                .delete('/api/tweets/' + tweet._id)
                .then(function(res) {
                    if (res.status === 200) {
                        $scope.tweetList.splice(index, 1);
                    } else {
                        /* Handle error */
                    }
                }, function(res) {
                    /* Handle error */
                });
        };
    }]);
