// All of the apps controllers are located here.

app.controller('RatingCtrl', ['$scope', function($scope) {

}])

app.controller('ChatCtrl', ['$scope', function($scope) {

}])

app.controller('VideoCtrl', ['$scope', function($scope) {

  $scope.audioDevices = [];

  $scope.videoDevices = [];

  if (typeof MediaStreamTrack === 'undefined') {
    console.log('This browser does not support MediaStreamTrack.');
    $scope.audioDevices.push({
      id: 'default',
      label: 'Default'
    });
    $scope.videoDevices.push({
      id: 'default',
      label: 'Default'
    });
  } else {
    MediaStreamTrack.getSources(function(sourceInfos) {

      for (var i = 0; i !== sourceInfos.length; ++i) {
        var sourceInfo = sourceInfos[i];
        if (sourceInfo.kind === 'audio') {
          sourceInfo.label = sourceInfo.label || 'microphone ' + ($scope.audioDevices.length + 1);
          $scope.audioDevices.push(sourceInfo);

        } else if (sourceInfo.kind === 'video') {
          sourceInfo.label = sourceInfo.label || 'camera ' + ($scope.videoDevices.length + 1);
          $scope.videoDevices.push(sourceInfo);
        }
      }
    });
  }

  //default media options
  // var mediaOptions = {
  //   audio: true,
  //   video: true
  // };
  //
  // if (selectedVideoDevice && selectedVideoDevice.sourceId) {
  //   mediaOptions.video = {
  //     mandatory: [{
  //       sourceId: selectedVideoDevice.sourceId
  //     }]
  //   };
  // }
  //
  // var webrtc = new SimpleWebRTC({
  //   localVideoEl: 'localVideo',
  //   remoteVideosEl: 'remotesVideos',
  //   autoRequestMedia: true,
  //   media: mediaOptions
  // });

  // webrtc.on('readyToCall', function() {
  //   // you can name it anything
  //   webrtc.joinRoom('jabSquared');
  // });

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
