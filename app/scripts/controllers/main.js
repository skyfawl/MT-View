'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mtViewApp
 */
 angular.module('mtViewApp')
 .controller('MainCtrl', ['$scope','$location','user', function ($scope,$location,user) {


 	var newUser =  user.initNewUser();

 	newUser.then(function(response){
 		var data = response.data;
 		user['user'] = data['new_user'];
 		var isGuest = user.isGuest();
 		if(isGuest){
 			$location.url('/newUser');
 			$location.replace();
 		}
 	});

 }]);
