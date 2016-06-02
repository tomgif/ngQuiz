'use strict';

angular.module('finishPage', ['core.question', 'core.state', 'core.navigation']);

angular.
  module('finishPage').
  component('finishPage', {
    templateUrl: 'finish-page/finish-page.template.html',
    controller: ['$routeParams', 'Question', 'State', 'Navigation',
      function finishPageController($routeParams, Question, State, Navigation) {
        this.finish = Question.get({qId: 'finish'});
      }
    ]
  });
