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

    $scope.nonMovieEntities = ['kwrd','gnr','sgnr','actr','dir'];

    var keywordSearchQuery = {
      "nmht":16,
      "ofst":0,
      "prslnz":1,
      "rstrt":1992,
      "rend":2015,
      "action":"srch",
      "card" : "kwrdSearchCard",
      "init":1

    }

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
 		 return MTservice.autoSuggest(term).then(function(response){
 			response = response.data;
 			return  response.results;
 		});
 	}

 	$scope.selectEntity = function(item, model, label){
  	var selectedEntity = item;
    var entityType = selectedEntity.typ ;
    if(_.contains($scope.nonMovieEntities, entityType)){
      keywordSearchQuery.key = selectedEntity.nm;
      keywordSearchQuery.want = entityType+"_"+selectedEntity._id;
      $location.path('/search/'+selectedEntity.nm).search(keywordSearchQuery);
    }else if("movie" === entityType){
      $location.path("/movie/"+selectedEntity.urlnm);
      $location.replace();
    }
 	}
 	//$scope.movieSuggest("god");
  }]);
