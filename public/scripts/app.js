console.log('app.js is linked!');

angular
  .module('booksApp', ['ngRoute'])
  .config(config);


config.$inject = ['$routeProvider', '$locationProvider'];
function config ( $routeProvider, $locationProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/templates/books.html',
      controller: 'BooksIndexController',
      controllerAs: 'booksIndexCtrl'
    })

    .when('/books/:id', {
      templateUrl: 'views/templates/books-show.html',
      controller: 'BooksShowController',
      controllerAs: 'booksShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    }
