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

 	var newUser =  UserService.initNewUser();
 	newUser.then(function(response){
 		var data = response.data;
 		UserService.user = data.user;
 		var isGuest = UserService.isGuest();
 		if(isGuest){
 			$location.url('/main');
 			$location.replace();
 		}
 	});	
 	
 }]);
