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

 	$scope.user.fav = $scope.fav;
 	$scope.user.wchd = $scope.wchd;
 	
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
