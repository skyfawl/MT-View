'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the mtViewApp
 */
angular.module('mtViewApp')
  .controller('HeaderCtrl',  ['$scope','$location','$q','UserService', 'MTservice',function ($scope,$location,$q,UserService,MTservice) {
    	
  	$scope.usrnm = "yamato";
  	$scope.salt = "moku";
  	$scope.signInError = false;
    $scope.canceller = $q.defer();
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
    if($scope.autoSuggestRequested){
    // setTimeout(function() {
      //         $scope.canceller.resolve('user cancelled');
        //   },1000);
     //$scope.autoSuggestRequested = false;
    }
    $scope.searchTerm = term;
 		 var autoSuggestRequest = MTservice.autoSuggest(term,$scope.canceller);
     $scope.previousRequest = autoSuggestRequest;
     $scope.autoSuggestRequested = true;
     return autoSuggestRequest.then(function(response){
      response = response.data;
      $scope.autoSuggestRequested = false;
      //console.log("Results for " +$scope.searchTerm);
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
      $location.path("/movie/"+selectedEntity.urlnm).search({});
      
    }
 	}
 	//$scope.movieSuggest("god");
  }]);
