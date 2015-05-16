'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mtViewApp
 */
angular.module('mtViewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
