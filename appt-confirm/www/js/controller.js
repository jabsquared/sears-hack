// first inject it into your app
angular.module('starter', ['ionic.rating'])

.controller('startController', function($scope) {

  // set the rate and max variables
  $scope.rate = 3;
  $scope.max = 5;

});
