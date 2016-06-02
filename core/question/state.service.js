'use strict';

angular
  .module('core.state', []);
  
angular.
  module('core.state').
  factory('State', function() {
    var list = [];

    return {
      addItem: addItem,
      getList: getList
    };

    function addItem(item, key) {
      if (typeof(key) !== 'undefined')
        list[key] = item;
      else
        list.push(item);
    }

    function getList() {
      return list;
    }
});