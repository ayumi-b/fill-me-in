angular
  .module('kids')
  .filter('objToArr', function () {
    return function (obj) {
      if (obj) {
        return Object.keys(obj).map(function (key) {
          obj[key]['_id'] = key;
          return obj[key];
        });
      }
    };
  })

