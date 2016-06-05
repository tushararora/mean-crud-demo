'use strict';

angular
    .module('root', [
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/tweets/views/tweets.list.html',
                controller: 'TweetController'
            });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    });
