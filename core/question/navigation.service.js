'use strict';

angular
  .module('core.navigation', []);
  
angular.
  module('core.navigation').
  factory('Navigation', function() {
    var current = false, 
        count = false;

    return {
      setCount: setCount,
      getCount: getCount,
      setCurrent: setCurrent,
      getCurrent: getCurrent,
    }

    function setCount(number){
      count = number;
    }

    function getCount(){
      return count;
    }

    function setCurrent(cur){
      current = cur;
    }

    function getCurrent(){
      return current;
    }
});