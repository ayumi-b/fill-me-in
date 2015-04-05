angular
  .module('kids')
  .config(journalConfig);

function journalConfig($routeProvider) {
  $routeProvider
    .when('/journal', {
      templateUrl: 'js/journal/table.html',
      controller: 'ShowController',
      controllerAs: 'journals'
    })
    .when('/journal/new', {
      templateUrl: 'js/journal/form.html',
      controller: 'JournalController',
      controllerAs: 'kids'

    })
    .when('/journal/uuid', {
      templateUrl: 'js/journal/show.html',
      controller: 'ShowController',
      controllerAs: 'show'

    })
    .when('/journal/end', {
      templateUrl: 'js/journal/end.html',
      controller: 'JournalController',
      controllerAs: 'end'
    })
    .when('/journal/viewer', {
      templateUrl: 'js/journal/viewer.html',
      controller: 'ShowController',
      controllerAs: 'show'
    })

    .otherwise({
      redirectTo: '/journal'
    });
}
