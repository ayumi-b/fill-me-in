angular 
  .module('kids')
  .controller('JournalController', JournalController);

function JournalController($http, $rootScope, $location, $scope, authFactory, BASE_URL) {
  var vm = this,
      fb = new Firebase(BASE_URL);
      // uuid = $routeParams.id;

  vm.newJournal = {};

  // $http
  //   .get(BASE_URL + '/users/.json')
  //   .success(function (data){
  //     vm.newJournal = data;


  //     console.info(vm.newJournal);
  //     //vm.newJournal.simplelogin.journal;
  //     console.log(vm.newJournal.journal);

  //   })

  vm.addJournal = function () {
    // vm.newJournal.schoolChange;
    // vm.newJournal.selfFood;
    // vm.newJournal.homeFood;
    // vm.newJournal.schoolMood;
    // vm.newJournal.schoolMoodWhy;
    // vm.newJournal.selfFuture;
    // vm.newJournal.selfFutureWhy;
    // vm.newJournal.selfGood;
    // vm.newJournal.selfImprove;
    // vm.newJournal.schoolMates;
    // vm.newJournal.homeActivity;

    $http
      .put(BASE_URL + '/users/' + fb.getAuth().uid + '/journal.json', vm.newJournal)
      .success(function (data) {
        vm.newJournal = data;
        console.log(vm.newJournal);
      });
  };

  //   vm.findAll = function (kids, fb) {
  //   vm.data = kids;
  // };
  vm.go = function () {
    $location.path('/journal/end');
    $scope.$apply();
};



   



  //   journalFactory.create(vm.newJournal, function (res) {
  //     $location.path('/journal/new');
  //   });
  // };

}