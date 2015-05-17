'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the mtViewApp
 */
angular.module('mtViewApp')
  .controller('HeaderCtrl',  ['$scope','$location','UserService', 'MTservice',function ($scope,$location,UserService,MTservice) {
    	
  	$scope.usrnm = "yamato";
  	$scope.salt = "moku";

  	$scope.signInError = false;

    $scope.login = function(){
    	UserService.signIn($scope.usrnm,$scope.salt).then(function(response){
    		response = response.data;
    	//	UserService.user = response.user;
 			$scope.user = UserService.user;
    	});
    }
   
   	$scope.logout = function(){
   		UserService.logOut();
   	}


 	$scope.entitySuggest = function(term){
 		 return MTservice.movieAutoSuggest(term).then(function(response){
 			response = response.data;
 			return  response.results;
 		});
 	}

 	$scope.selectEntity = function(item, model, label){
 		console.log(item);
 		console.log(model);
 		console.log(label);
 	}
 	//$scope.movieSuggest("god");
  }]);
