// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup state for login page
  .state('tickets', {
    url: '/tickets',
    templateUrl: 'templates/tickets.html',
    controller: 'TicketsCtrl'
  })

  .state('chat', {
    url: '/chat',
    templateUrl: 'templates/chat.html',
    controller: 'ChatCtrl'
  })

  .state('rating', {
    url: '/rating',
    templateUrl: 'templates/rating.html',
    controller: 'RatingCtrl'
  })

  .state('video', {
    url: '/video',
    templateUrl: 'templates/video.html',
    controller: 'VideoCtrl'
  })

  .state('home',{
    url: '/home/',
    templateUrl:'templates/home.html',
    controller: 'HomeCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/video');
});
