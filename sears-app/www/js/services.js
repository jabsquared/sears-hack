app.factory('product_data', ['$http', function($http){

  return null;

}])

app.factory('techs', ['$http', function($http) {

  var getinfo = function(prodnum) {

  var results = [{
    id: 1,
    name: 'Bogdan',
    stars: 5,
    img: '',
    reviews: {
      body: ''
    }
  }, {
    id: 2,
    name: 'Louis',
    stars: 5,
    img: '',
    reviews: {
      body: ''
    }
  }, {
    id: 3,
    name: 'Jim',
    stars: 5,
    img: '',
    reviews: {
      body: ''
    }
  }, {
    id: 4,
    name: 'Brain',
    stars: 5,
    img: '',
    reviews: {
      body: ''
    }
  }, {
    id: 5,
    name: 'Aryan',
    stars: 5,
    img: '',
    reviews: {
      body: ''
    }
  }]
  return {
    all: function() {
      return results;
    },
    get: function(id) {
      for (var i = 0; i < results.length; i++) {
        if (results[i].id === parseInt(id)) {
          return results[i];
        }
      }
      return null;
    }
  };
}]);
