'use strict';

/**
 * @ngdoc overview
 * @name mtViewApp
 * @description
 * # mtViewApp
 *
 * Main module of the application.
 */
angular
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
      .when('/newUser',{
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
