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

    vm.updateBook = function(updatedBook) {
      console.log('updated book ', updatedBook);
      $http({
        method: 'PUT',
        url: 'https://super-crud.herokuapp.com/books' + updatedBook._id,
        data: {
          title: updatedBook.title,
          author: updatedBook.author,
          image: updatedBook.image,
          releaseDate: updatedBook.releaseDate
        }
      }).then(onUpdateBookSuccess, onError);

      function onUpdateBookSuccess(response){
        console.log('Updated Book', bookId, ':', response.data);
        vm.book = response.data;
        $location.path('/');
      }
    };

    vm.deleteBook = function(book) {
      console.log('deleting book: ', book);
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/'+book._id,
      }).then(onDeleteBookSuccess, onError);

      function onDeleteBookSuccess(response){
        console.log('Deleted book', response.data);
        $location.path('/');
      }
    };
  }
