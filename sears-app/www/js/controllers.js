// All of the apps controllers are located here.

app.controller('RatingCtrl', ['$scope', function($scope) {

}])

app.controller('ChatCtrl', ['$scope', function($scope) {

}])

app.controller('VideoCtrl', ['$scope', function($scope) {

  var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true
  });

  webrtc.on('readyToCall', function() {
    // you can name it anything
    webrtc.joinRoom('your awesome room name');
  });

}])

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
