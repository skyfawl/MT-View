'use strict';

/**
 * @ngdoc overview
 * @name mtViewApp
 * @description
 * # mtViewApp
 *
 * Main module of the application.
 */
var app = angular
  .module('mtViewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/main',{
            templateUrl: 'views/landingpage.html',
            controller: 'LandingpageCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.config([
    '$httpProvider', 
    function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);