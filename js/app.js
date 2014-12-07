'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('brickApp',
  [ 'brickApp.config'
  // , 'brickApp.controllers.header'
  // , 'brickApp.controllers.signin'
  // , 'brickApp.controllers.signup'
  , 'brickApp.controllers.calendar'
  ,'brickApp.services.calendar'
  ,'brickApp.filters'
  // , 'firebase'
  , 'ngRoute']
  )
