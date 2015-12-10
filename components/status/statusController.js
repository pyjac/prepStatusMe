// components/status/statusController.js

(function() {

 'use strict';

 angular
   .module('statusApp')
   .controller('StatusController', ['$rootScope', 'Status', 'md5', function ($rootScope, Status, md5) {

      var vm = this;

      vm.addStatus = addStatus;
      vm.deleteStatus = deleteStatus;
      vm.md5 = md5;
      vm.statusData = Status;

      function deleteStatus(status) {

      // Remove the status that was passed in
      // from the views
      vm.statusData.$remove(status);
    }

      function addStatus() {
        if(vm.statusText) {
          vm.statusData.$add({

            // Add the status data to Firebase
            date: Firebase.ServerValue.TIMESTAMP,
            text: vm.statusText,
            user: {
              username: $rootScope.loggedInUserData.username,
              email: $rootScope.loggedInUserData.email
            }
          });

          vm.statusText = '';
        }
      }
    }
 ]);


})();
