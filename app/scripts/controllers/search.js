'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the mtViewApp
 */
angular.module('mtViewApp')
  .controller('SearchCtrl',[ "$scope","$location","MTservice",function ($scope,$location,MTservice) {
   	

  	$scope.searchQuey = $location.$$search;
  	$scope.from = $scope.searchQuey.ofst;
  	$scope.size = $scope.searchQuey.nmht;
  	$scope.searchTerm = $scope.searchQuey.key;
  	$scope.searchInProgess = true;

  	$scope.search = function(){
  		var queryString = $location.url();
  		if(queryString){
  			queryString = queryString.substring(queryString.indexOf("?"));
  			$scope.searchRequest = MTservice.searchKeyword(queryString);
  			$scope.searchInProgess = true;
  			$scope.searchRequest.then(function(response){
  				response = response.data;
  				console.log(response);
  				$scope.numResults = response.results.length;
  				$scope.searchInProgess = false;
  			});
  		}
  	}

  	$scope.search();
  }]);
