'use strict';

angular.
  module('core.question', ['ngResource']);

angular.
  module('core.question').
  factory('Question', ['$resource',
    function($resource) {
      return $resource('questions/:qId.json', {}, {
        query: {
          method: 'GET',
          params: {qId: 'start'},
          isArray: true
        }
      });
    }
  ]);
