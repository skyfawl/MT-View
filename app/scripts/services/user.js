'use strict';

/**
 * @ngdoc service
 * @name mtViewApp.user
 * @description
 * # user
 * Service in the mtViewApp.
 */
angular.module('mtViewApp')
  .service('user',['$http', function ($http){
    		
    	this.user = {};


    	this.initNewUser = function(){
    		return $http.get('server_tmp_resources/user.json');
    	};

    	this.signIn = function(usrnm,salt){
    		console.log(usrnm + salt);
    	};

    	this.signUp = function(userInfo){
    		console.log(userInfo);
    	};

    	this.getCurrentUser = function(){
    		return this.user;
    	};

    	this.isGuest = function(){
    		return this.user.guest;
    	};



  }]);
