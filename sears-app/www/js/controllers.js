// All of the apps controllers are located here.

app.controller('TicketsCtrl', ['$scope', 'techs', 'product_data', '$http', function($scope, techs, product_data, $http) {

  $scope.techs = techs.all();

  console.log('before call');

  $scope.test = function() {
    console.log('In test function');

    $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=Refrigerators')
      .success(function(data, status, headers, config) {
        console.log('Data: ' + JSON.stringify(data));

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data);
        console.log(status);
        console.log(headers);

      });

    console.log('end!');
  }

}]);
