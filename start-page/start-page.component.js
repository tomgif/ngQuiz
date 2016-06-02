'use strict';

angular.module('startPage', ['core.question', 'core.navigation']);

angular
	.module('startPage')
	.component('startPage', {
		templateUrl: 'start-page/start-page.template.html',
		controller: ['$routeParams', 'Question', 'Navigation',
			function($routeParams, Question, Navigation) {
				this.start = Question.get({qId: 'start'}, function(start){
					Navigation.setCount(start.count);					
				});
			}
		]
	})