// components/auth/authController.js

(function() {
  'use strict';

  angular
    .module('statusApp')
    .controller('AuthController', ['Auth','User','$state',function(Auth,User,$state){

    var vm = this;

    vm.createUser = createUser;
    vm.login = login;
    vm.loggedInUser;
    console.log("He");
    function createUser() {

         // If there is already a user logged in,
         // log them out before proceeding
         Auth.$unauth();

         console.log("hello1");
         Auth.$createUser({
           email: vm.email,
           password: vm.password
         }).then(function(userData) {
           console.log("hello2");
           saveUser(userData);
           login();
         }).catch(function(error) {
           vm.error = error;
         });
       }

       function saveUser(userData) {

         var user = User.newUserRef(userData);
         user.username = vm.username;
         user.email = vm.email;

         user.$save().then(function(success) {
           vm.username = null;
           vm.email = null;
           vm.password = null;
           $state.go('status');
         }, function(error) {
           console.log("there was an error! " + error);
         });
       }
    function login() {

      Auth.$authWithPassword({
        email: vm.email,
        password: vm.password
      }).then(function(data) {
        vm.email = null;
        vm.password = null;
        $state.go('status');
      }).catch(function(error) {
        console.log(error);
      });
    }

}]);
})();
