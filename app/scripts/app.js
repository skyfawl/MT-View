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
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/landing',{
            templateUrl: 'views/landingpage.html',
            controller: 'LandingpageCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/search/:searchTerm', {
        templateUrl: 'views/searchentity.html',
        controller: 'SearchCtrl'
      })
      .when('/movie/:movieUrlnm', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.config([
    '$httpProvider', 
    function($httpProvider) {
        $httpProvider.defaults.useXDomain = false;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);