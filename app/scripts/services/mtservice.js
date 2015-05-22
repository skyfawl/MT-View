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
      // http://metataste.com/do?nmht=16&ofst=0&card=kwrdSearchCard&key=God&prsnlz=1&rstrt=1900&rend=2012&fltr=&want=kwrd_4dd3faa9237e1e43c5a4183d&avbl=&short=&more=&init=1&action=srch
  		var latestMovieUrl = "?card=kwrdSearchCard&typ=IT&action=latest";
  		var autoSuggestUrl = "?action=sgst&nmht=10&term=";

  		var addToLstUrl = "?card=moviePosterCard&action=adToLst";
      var kwrdSearchCard = "&kwrdSearchCard";
      var searchYearBoost = "&rstrt=1900&rend=2015";

      var entityUrl = "?card=movieCard&action=find&entId="
    	this.getLatestMovies = function(){
    		return $http.get(BASE_URL + latestMovieUrl);
    	}

    	this.autoSuggest = function(term,canceller){
    		return  $http.get(BASE_URL + autoSuggestUrl + term,{ "timeout": canceller.promise });
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

      this.searchKeyword = function(uri){
        return  $http.get(BASE_URL+ uri);
      }
      
      this.getEntity = function(entityId,card){
        var movieUri = entityUrl + entityId ;
        return $http.get(BASE_URL + movieUri);
      }

  }]);
