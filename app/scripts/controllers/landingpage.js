'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:LandingpageCtrl
 * @description
 * # LandingpageCtrl
 * Controller of the mtViewApp
 */
 angular.module('mtViewApp')
 .controller('LandingpageCtrl',['$scope','UserService','MTservice',function ($scope,UserService,MTservice) {
 	
 	$scope.user = UserService.getCurrentUser();
 	$scope.wchd = [];
 	$scope.fav = [];

 	var user = UserService.getCurrentUser();

 	if(user){
 		$scope.user = user;
 	}else{
 		var newUser =  UserService.initNewUser();
 		newUser.then(function(response){
 			var data = response.data;
 			UserService.user = data.user;
 			$scope.user = UserService.user;
 			var isGuest = UserService.isGuest();
 			if(isGuest){
 				console.log("Is Guest")
 			}
 		});	
 	}
 	
 	MTservice.getLatestMovies().then(function(response){
 		response = response.data;
 		$scope.latest = response.results;
 	});

 	$scope.addToLst = function(movie,lstType){
 		MTservice.addToLst(movie,lstType).then(function(response){
 			response = response.data;
 			if(response.stts != 1){
 				console.log("Added to List");
 			}
 		});
 	}

 	$scope.movieSuggest = function(term){
 		MTservice.movieAutoSuggest(term).then(function(response){
 			response = response.data;
 			$scope.suggestedMovies = response.results;
 			
 		});
 	}



 }]);
