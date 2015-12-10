// components/auth/authService.js

(function() {
  'use strict';

  angular
    .module('statusApp')
    .factory('Auth', ['$firebaseAuth', function ($firebaseAuth) {
      var ref = new Firebase("https://status-me.firebaseio.com");
      return $firebaseAuth(ref);
    }]);

})();
