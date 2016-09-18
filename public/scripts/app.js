console.log('app.js is linked!');

angular
  .module('books', ['ngRoute'])
  .config(config);


config.$inject = ['$routeProvider', '$locationProvider'];
function config ( $routeProvider, $locationProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books/index.html',
      controller: 'BooksIndexController',
      controllerAs: 'booksIndexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider
      .html5Moxe({
        enabled: true,
        requireBase: false
      });
    }
