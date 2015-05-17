'use strict';

/**
 * @ngdoc service
 * @name mtViewApp.MTservice
 * @description
 * # MTservice
 * Service in the mtViewApp.
 */
angular.module('mtViewApp')
  .service('MTservice', ['$http', function ($http){
    
  		var BASE_URL = "http://metataste.com/do";

  		var latestMovieUrl = "?card=kwrdSearchCard&typ=IT&action=latest";
  		var autoSuggestUrl = "?action=sgst&nmht=10&term=";

  		var addToLstUrl = "?card=moviePosterCard&action=adToLst";

    	this.getLatestMovies = function(){
    		return $http.get(BASE_URL + latestMovieUrl);
    	}

    	this.autoSuggest = function(term){
    		return  $http.get(BASE_URL + autoSuggestUrl + term);
    	}

    	this.movieAutoSuggest = function(term){
    		var filterMovie = "&fltr=typ_movie_1";
    		return  $http.get(BASE_URL + autoSuggestUrl + term + filterMovie);
    	}

    	this.addToLst = function(movie,lstType){
    		var movieId = movie._id;
    		var addToLstUri = addToLstUrl + "&list="+lstType+"&dest="+movieId;
    		return  $http.get(BASE_URL +  addToLstUri);
    	}
  }]);
