// components/status/statusService.js

(function() {

  'use strict';

  angular
    .module('statusApp')
    .factory('Status', ['$firebaseArray',   function($firebaseArray) {
        var ref = new Firebase("https://status-me.firebaseio.com/status");
        return $firebaseArray(ref);
      }]);

})();
