'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mtViewApp
 */
angular.module('mtViewApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
