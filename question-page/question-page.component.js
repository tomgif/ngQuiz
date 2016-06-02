'use strict';

angular.module('questionPage', ['core.question', 'core.state', 'core.navigation']);

angular.
  module('questionPage').
  component('questionPage', {
    templateUrl: 'question-page/question-page.template.html',
    controller: ['$routeParams', '$location', 'Question', 'State', 'Navigation',
      function questionPageController($routeParams, $location, Question, State, Navigation) {
        Navigation.setCurrent($routeParams.qId);
        
        var count = Navigation.getCount();
        var current = Navigation.getCurrent();

        if (!count)
          $location.url('/start');
        
        if (current <= count){
          this.question = Question.get({qId: $routeParams.qId});
        }


        this.addAnswer = function(answer){
          //добавляем ответ в наш сервис
          State.addItem(answer, $routeParams.qId - 1);
        }

        this.count = State.getList();
        this.next = current == count ? 'finish' : parseInt(current) + 1;
      }
    ]
  });
