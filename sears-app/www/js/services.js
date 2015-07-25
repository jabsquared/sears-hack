app.factory('product_data', ['$http', function($http){

  // return function(catagory) {
  //   // Simple GET request example :
  //   $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=' + catagory).
  //     success(function(data, status, headers, config) {
  //       return data;
  //       console.log(data);
  //     }).
  //     error(function(data, status, headers, config) {
  //       return data;
  //       console.log(data);
  //     });
  //     console.log('done with http call!');
  // }

  return null;

}])

app.factory('ticketData', ['$http', function($http) {
  // console.log('in service!');

  var info = null;
  var getinfo = function(prodnum) {
    // console.log("in getinfo");
    // Simple GET request example :
    var url = 'https://bpshonyak-prod.apigee.net/hello-world/sears?type=details&prodnum=' + prodnum;

    $http.get(url).
    success(function(data, status, headers, config) {
      console.log(data);
      console.log('success');
    }).
    error(function(data, status, headers, config) {
      console.log("Failure");
      console.log(url);
    }).
    finally(function(data){
      console.log("Finally");
      info =  'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112';
    })
    return info
    ;
  };

  var tickets = [{
    id: 1,
    tech: 'Bogdan',
    status: 'Pending',
    prodnum: '04649599000P',
    img: getinfo('04649599000P')
  }, {
    id: 2,
    tech: 'Louis',
    status: 'Pending',
    prodnum: '02211000000P',
    img: 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
  }, {
    id: 3,
    tech: 'Jim',
    status: 'Complete',
    prodnum: '02615000000P',
    img: 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
  }, {
    id: 4,
    tech: 'Brain',
    status: 'In Progress',
    prodnum: '04622442000P',
    img: 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
  }]
  return {
    all: function() {
      return tickets;
    },
    add: function(events, obj) {
      tickets.pop(obj);
    },
    get: function(id) {
      for (var i = 0; i < tickets.length; i++) {
        if (tickets[i].id === parseInt(id)) {
          return tickets[i];
        }
      }
      return null;
    }
  };
}]);
