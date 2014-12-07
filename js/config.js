'use strict';

// Declare app level module which depends on filters, and services
angular.module('brickApp.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/',        { templateUrl: 'views/default.html' })
      .when('/signin',  { templateUrl: 'views/users/signin.html' })
      .when('/signup',  { templateUrl: 'views/users/signup.html' })
      .otherwise(       { redirectTo: '/' });
    }])
  
  // establish authentication
  // .run(['angularFireAuth', 'FBURL', '$rootScope', 
  //   function(angularFireAuth, FBURL, $rootScope) {
  //     angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
  //     $rootScope.FBURL = FBURL;
  //   }])

  // your Firebase URL goes here
  // should look something like: https://blahblahblah.firebaseio.com
  // .constant('FBURL', 'brickplanner.firebaseio.com')


