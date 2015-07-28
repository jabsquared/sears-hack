// All of the apps controllers are located here.

app.controller('RatingCtrl', ['$scope', '$cordovaSocialSharing', function($scope, $cordovaSocialSharing) {

  // set the rate and max variables
  $scope.rate = 4;
  $scope.max = 5;

  // sharing ratings

  $scope.shareAnywhere = function() {
    console.log("works!");
    $cordovaSocialSharing.share("I just got help fixing my dryer from my Sears technician, Louis! I gave him a 5 star rating!", "Sears Appliance Services", null, "http://sears.com");
  }

  $scope.shareViaTwitter = function(message, image, link) {
    $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
      $cordovaSocialSharing.shareViaTwitter(message, image, link);
    }, function(error) {
      alert("Cannot share on Twitter");
    });
  }

}])

app.controller('ChatCtrl', ['$scope', function($scope) {

}])

app.controller('HomeCtrl', ['$scope', function($scope) {

}])

app.controller('ScheduleCtrl', ['$scope', function($scope) {

}])

app.controller('VideoCtrl', ['$scope', function($scope) {

  var webrtc = new SimpleWebRTC({
    localVideoEl: 'localVideo',
    remoteVideosEl: 'remoteVideo',
    autoRequestMedia: true
  });

  webrtc.on('readyToCall', function() {
    webrtc.joinRoom('Some Fucking Unique Name');
  });

  $scope.audioDevices = [];

  $scope.videoDevices = [];

  // $scope.startRTC = function(selectedVideoDevice) {
  //   //default media options
  //
  //     var mediaOptions = {
  //       audio: true,
  //       video: true
  //     };
  //
  //     if (selectedVideoDevice && selectedVideoDevice.sourceId) {
  //       mediaOptions.video = {
  //         mandatory: [{
  //           sourceId: selectedVideoDevice.sourceId
  //           // sourceId: 43972bf8f1844c154daeb00e62b241bf65ca68be56bc508ae4d7c5b4b17ee8be
  //
  //         }]
  //       };
  //     }
  //
  //     var webrtc = new SimpleWebRTC({
  //     // the id/element dom element that will hold "our" video
  //     localVideoEl: 'localVideo',
  //     // the id/element dom element that will hold remote videos
  //     remoteVideosEl: 'remoteVideos',
  //     // immediately ask for camera access
  //     autoRequestMedia: true,
  //     media: mediaOptions
  //     });
  //
  //     webrtc.on('readyToCall', function() {
  //       // you can name it anything
  //       webrtc.joinRoom('jabSquared');
  //     });
  // }

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
