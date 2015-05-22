'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the mtViewApp
 */
angular.module('mtViewApp')
  .controller('MovieCtrl',[ '$scope','$routeParams','$location','MTservice',function ($scope,$routeParams,$location,MTservice) {
  	 var movieCard = "movieCard";
  	 var movieId = $routeParams.movieId;
     $scope.loadingMovie = true;
  	 if(!movieId){
  	 	$location.path('/');
  	 	$location.replace();
  	 }

  	 var movieRequest = MTservice.getEntity(movieId,movieCard);
     movieRequest.then(function(response){
      response = response.data;
      $scope.movie = response.success;
      $scope.loadingMovie = false;
     });
  	 
  }]);
