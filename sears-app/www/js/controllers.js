// All of the apps controllers are located here.

app.controller('TicketsCtrl', ['$scope', 'ticketData', 'product_data', '$http', function($scope, ticketData, product_data, $http) {

  $scope.tickets = ticketData.all();

  console.log('before call');

  $scope.test = function() {
    console.log('In test function');
    var products = $.ajax({
      url: 'https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=Refrigerators',
      type: 'GET',
      // dataType: 'json',
      success: function(data) {
        console.log('Retrived Products!');
        if (typeof success != 'undefined') {
          // jQuery.parseJSON(doc.responseJSON.documents.toSource();
          success(data);
        }
      },
      fail: function(data) {
        alert(data.error);
        console.log('Failed!');
        if (typeof fail != 'undefined') {
          fail(data);
        }
      }
    });

    products.done(function(data) {
      console.log(data);
    });

    console.log('end!');
  }

  $scope.color_stat = function(ticket) {
    if (ticket.status === 'Pending') {
      return '#AFC4C5';
    } else if (ticket.status === 'Complete') {
      return '#00FF99';
    } else if (ticket.status === 'In Progress') {
      return '#FFFF66';
    } else {
      return 'red';
    }
  }

}]);
