angular
  .module('kids')
  .factory('journalFactory', journalFactory);

  function journalFactory($http, BASE_URL) {
      var journals = {};
      var fb = new Firebase(BASE_URL);

      journals.findAll = function(cb) {
        $http
          .get(BASE_URL + '/users.json')
          .success(function (data) {
            cb(data);
            // console.log('JOURNAL!!!!!S',journals);
          });
      };
  return journals;


}


// function journalFactory($http, BASE_URL) {
//   var kids = {},
//         fb = new Firebase(BASE_URL);


//   kids.create = function (fb, data, cb) {
//     $http
//       .post(BASE_URL + '/users/' + fb.getAuth().uid +'/journal.json', data)
//       .success(function (res) {
//         cb(res);
//       });
//   };
   

  // kids.findOne = function (fb, cb) {
  //   $http
  //     .get(BASE_URL + '/journal/' + fb.getAuth().uid + '.json')
  //     .success(function (data) {
  //       cb(data);
  //     });
  // };

  // kids.findAll = function (id, cb) {
  //   $http
  //     .get(BASE_URL + '/journal/' + id + '.json')
  //     .success(function (data) {
  //       cb(data);
  //     });
  // };



  // kids.delete = function (id, cb) {
  //   var url = BASE_URL +'/journal/' + id + '.json';

  //   $http
  //     .delete(url)
  //     .success(function () {
  //       cb();
  //     });
  // };
  // kids.update = function(id, data, cb) {
  //   var url = BASE_URL + '/journal/' + id + '.json';

  //   $http
  //     .put(url, data)
  //     .success(function (res){
  //       if (typeof cb === 'function') {
  //         cb(res);
  //       }
  //     });
  // };
  //   return kids;      
  // }
