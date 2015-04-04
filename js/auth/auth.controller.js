angular
  .module('kids')
  .controller('AuthController', AuthController)

function AuthController($rootScope, $http, $scope, $location, authFactory, BASE_URL) {
  var vm = this;

  vm.user = {};

  vm.login = function () {
    authFactory.login(vm.user, function (err, authData) {
      if (err) {
        console.log('Error logging in user:', err);
      } else {
        console.log('Logged in successfully', authData);
        $rootScope.user = authData;
        $location.path('/journal/new');
        $scope.$apply();
      }
    });
  };

  vm.register = function () {
    authFactory.register(vm.user, function (err, authData) {
      if (err && err.code === 'EMAIL_TAKEN') {
        console.log('Error creating user:', err);
        vm.login();
      } else if (err) {
        console.log('Error creating user:', err)
      } else {
        console.log('User created successfully', authData);
        vm.login();
        vm.user.admin = "false";
        $http
          .put(BASE_URL + '/users/' + authData.uid + '/profile.json', vm.user)
          .success(function (data){
            vm.user = data;
            console.log('success');
          });
      }
    });
  };

  vm.forgotPassword = function () {
    authFactory.forgotPassword(vm.user, function (err) {
      if (err) {
        console.log('Error resetting password:', err)
      } else {
        console.log('Password reset email sent successfully');
      }
    });
  };
}


