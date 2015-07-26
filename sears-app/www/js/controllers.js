// All of the apps controllers are located here.

app.controller('RatingCtrl', ['$scope', function($scope) {

}])

app.controller('ChatCtrl', ['$scope', function($scope) {

}])

app.controller('HomeCtrl', ['$scope', function($scope) {

}])

app.controller('ScheduleCtrl', ['$scope', function($scope) {

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

  $scope.startRTC = function() {
    //default media options
    var mediaOptions = {
      audio: true,
      video: true
    };

    if (selectedVideoDevice && selectedVideoDevice.sourceId) {
      mediaOptions.video = {
        mandatory: [{
          sourceId: selectedVideoDevice.sourceId
        }]
      };
    }

    var webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: true,
      media: mediaOptions
    });

    webrtc.on('readyToCall', function() {
      // you can name it anything
      webrtc.joinRoom('jabSquared');
    });
  }

}])

app.controller('TicketsCtrl', ['$scope', 'product_data', '$http', function($scope, product_data, $http) {

  // $scope.techs = techs.all();

  var unique = function(arr) {
    var i,
      len = arr.length,
      out = [],
      obj = {};

    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }

  $scope.brandModel = '';

  // $scope.techs = techs.all();
  $scope.products;
  $scope.brands = [];
  $scope.types = [
    'Refrigerators',
    'Dryers',
    'Washers',
    'Cooktops'
  ];

  $scope.warrantys = [
    'No Coverage',
    'Sears Special Protection',
    'Manufacturer warranty',
    "Don't Know"
  ];

  $scope.problems = [
    'Noise',
    'On Fire',
    'No Power'
  ]

  $scope.changeType = function(type) {
    console.log('Type: ');
    console.log(type);
    $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=' + type)
      .success(function(data, status, headers, config) {
        console.log(data);
        $scope.products = data.SearchResults.Products;
        console.log($scope.products);
        $scope.brands = []
        for (var i = 0; i < $scope.products.length; i++) {
          $scope.brands.push($scope.products[i].Description.BrandName);
        }
        console.log($scope.brands);
        $scope.brands = unique($scope.brands);
        console.log($scope.brands);
      }).
    error(function(data, status, headers, config) {});

    console.log('end!');
  }

  console.log('before call');

  (function() {
    console.log('In test function');

    $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=Refrigerators')
      .success(function(data, status, headers, config) {
        $scope.products = data.SearchResults.Products;
        console.log($scope.products);
        for (var i = 0; i < $scope.products.length; i++) {
          $scope.brands.push($scope.products[i].Description.BrandName);
        }
        console.log($scope.brands);
        $scope.brands = unique($scope.brands);
        console.log($scope.brands);
      }).
    error(function(data, status, headers, config) {});

    console.log('end!');
  })();

}]);
