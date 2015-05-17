'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mtViewApp
 */
 angular.module('mtViewApp')
 .controller('MainCtrl', ['$scope','$location','UserService', function ($scope,$location,UserService) {

 	var user = UserService.getCurrentUser();
 	if(user){
 		console.log("Welcome Back");
 	}else{
 		$location.url('/landing');
 		$location.replace();
 	}


 }]);
