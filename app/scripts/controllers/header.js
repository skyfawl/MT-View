'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the mtViewApp
 */
angular.module('mtViewApp')
  .controller('HeaderCtrl',  ['$scope','$location','UserService', function ($scope,$location,UserService) {
    	
  	$scope.usrnm = "yamato";
  	$scope.salt = "mokuto";
  	
    $scope.login = function(){

    }
  }]);
