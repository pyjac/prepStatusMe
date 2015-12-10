// components/user/userService.js

(function() {

  'use strict';

  angular
    .module('statusApp')
    .factory('User', ['$firebaseObject',  function($firebaseObject) {

        function newUserRef(user) {
          var ref = new Firebase("https://status-me.firebaseio.com/users/" + user.uid);
          return $firebaseObject(ref);
        }

        function getUserData(user) {
          var ref = new Firebase("https://status-me.firebaseio.com/users/" + user);
          return $firebaseObject(ref);
        }

        function getLoggedInUser() {
          var user = localStorage.getItem('firebase:session::status-me');
          if(user) {
            return JSON.parse(user);
          }
        }

        return {
          newUserRef: newUserRef,
          getUserData: getUserData,
          getLoggedInUser: getLoggedInUser
        }

      }
]);


})();
