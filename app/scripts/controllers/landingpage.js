'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:LandingpageCtrl
 * @description
 * # LandingpageCtrl
 * Controller of the mtViewApp
 */
 angular.module('mtViewApp')
 .controller('LandingpageCtrl',['$scope','user',function ($scope,user) {
 	
 	$scope.user = user.getCurrentUser();
 	$scope.wchd = [];
 	$scope.fav = [];

 	$scope.user.fav = $scope.fav;
 	$scope.user.wchd = $scope.wchd;
 	console.log(user.user);

 }]);
