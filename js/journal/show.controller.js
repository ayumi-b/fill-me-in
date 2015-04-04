angular
  .module('kids')
  .controller('ShowController', ShowController);

function ShowController( $http, journalFactory, $scope, BASE_URL) {
  var vm = this;
  // vm.journals = {};
  vm.journal;
  vm.journalUsers;

  // $http.get(BASE_URL + "/users.json")
  // .success(
  //   function(data){
  //     vm.journalUsers = data;
  //     console.log(vm.journalUsers);
  //   });
  journalFactory.findAll(function(data){
    vm.journalUsers = data;
  });
  // journalFactory.findAll(function (journals) {
  //   var journalVals = [];
  //   var Arrays = [];
  //   var vals = Object.keys(journals).map(function(key){
  //     return journals[key];
  //   });
  //   for(var i = 0; i<vals.length; i++){
  //     Arrays.push(Object.keys(vals[i].journal).map(function(key){
  //     return vals[i].journal[key];
  //     }));
  //   }
  //   journalVals = journalVals.concat.apply(journalVals, Arrays);
  //   $scope.journalVals = journalVals;
  // });
    //   vm.journalPop(function (journals) {
};
    // });





  // $http
  //   .get(BASE_URL + '/users/' + fb.getAuth().uid + '/journal.json')
  //   .success(function (data) {
  //     vm.journals = data;
  //   })
  //   .then(function (res) {
  //     console.log(res.data);
  //     Object.keys(res.data).forEach(function (key) {
  //       journalPop(key, res.data[key].uid)
  //     });
  //   });

  // function journalPop(uuid, uid) {
  //   $http
  //     .get(BASE_URL + '/users/' + uid + '/journal.json')
  //     .success(function (data){
  //       console.log('journals', data);
  //       data.uid = uid;
  //       vm.journals[uuid] = data;
  //     });
  // }


  // vm.findOne(id, function(kid){
  //   vm.kid = kid;
  // });


