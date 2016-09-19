angular
  .module('booksApp')
  .controller('BooksShowController', BooksShowController);

  BooksShowController.$inject=['$http', '$routeParams', '$location'];
  function BooksShowController($http, $routeParams, $location) {
    var vm = this;
    var bookId = $routeParams.id;
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' +bookId
    }).then(onBookShowSuccess, onError);

    function onBookShowSuccess(response){
      console.log('data for book ', bookId, ':', response.data);
      vm.book = response.data;
    }

    function onError(error){
      console.log('There was an error ', error);
    }

  }
