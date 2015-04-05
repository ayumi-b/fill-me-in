angular
  .module('kids')
  .controller('ShowController', ShowController);

function ShowController( $http, journalFactory, $scope, BASE_URL) {
  var vm = this;
  // vm.journals = {};
  vm.journal;
  vm.journalUsers;
  vm.tempUsersArray = [];

  journalFactory.findAll(function(data){
    vm.journalUsers = data;
    console.log(data);
  });

  vm.DocCtrl = function() {
      vm.pdfUrl = '/pdf/table.pdf';
      $location.path('/journal/viewer');
  };

var doc = new jsPDF();

// We'll make our own renderer to skip this editor
var specialElementHandlers = {
    '#editor': function(element, renderer){
        return true;
    }
};

doc.fromHTML($('table').get(0), 10, 10, {
    'width': 300, 
    'elementHandlers': specialElementHandlers
});
//doc.save('Test.pdf');

$('a').click(function(){
  doc.save('Fill-Me-In-Responses.pdf');
});

};
    // });




