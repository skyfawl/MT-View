'use strict';

/**
 * @ngdoc service
 * @name mtViewApp.user
 * @description
 * # user
 * Service in the mtViewApp.
 */
angular.module('mtViewApp')
  .service('UserService',['$http', function ($http){
    	
        var BASE_URL = "http://metataste.com/do";
        var loginCheck = "?card=loginUserCard&action=login";

    	this.user = null;

        
    	this.initNewUser = function(){
    		return $http.get(BASE_URL + loginCheck);
    	};

    	this.signIn = function(usrnm,salt){
            var userInfo = {
                            "usrnm":usrnm,
                            "pswd":salt,
                            "card":"loginUserCard",
                            "action":"mtauth"
            };
    		//return $http.post(BASE_URL,userInfo);
            return $http.get(BASE_URL + loginCheck);
    	};

        this.logOut = function(){
            
        }
        
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
