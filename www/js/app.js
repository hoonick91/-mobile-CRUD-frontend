// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])
  .constant('BASE_URL','http://192.168.1.182:8000')
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider

      .state('login',{
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('main',{
        url: '/main',
        abstract:true,//이 페이지를 너머가고 바로 다음 state로 간다
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('main.board',{
        url: '/board',
        abstract:true,
        views: {
          'mainContent': {
            templateUrl: 'views/board/index.html',
            controller: 'BrdCtrl'
          }
        }
      })

      .state('main.board.list',{
        url: '/list',
        cache: false,
        views: {
          'boardContent': {
            templateUrl: 'views/board/board.html',
            controller: 'BrdCtrl'
          }
        }
      })
      .state('main.write',{
        url: '/write',
        views:{
          'mainContent':{
            templateUrl: 'views/board/boardWrite.html',
            controller: 'writeCtrl'
          }
        }
      })


      .state('main.board.detail',{
        url: '/detail/:id',
        params: {
          post: null
        },
        views:{
          'boardContent':{
            templateUrl: 'views/boardDetail.html',
            controller: 'detailCtrl'
          }
        }
      })



      .state('main.list2',{
        url: '/list2',
        // templateUrl: 'views/board2.html',
        controller: 'BrdCtrl',
        views: {
          'mainContent': {
            templateUrl: 'views/board2.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');//기본페이지가 된다

  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
