'use strict';

angular.
  module('quiz').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/quiz/start', {
          template: '<start-page></start-page>'
        }).
        when('/quiz/finish', {
          template: '<finish-page></finish-page>'
        }).
        when('/quiz/:qId', {
          template: '<question-page></question-page>'
        }).
        otherwise('/quiz/start');
    }
  ]);
