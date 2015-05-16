'use strict';

/**
 * @ngdoc function
 * @name mtViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mtViewApp
 */
angular.module('mtViewApp')
  .controller('MainCtrl', ['$scope','user', function ($scope,user) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   		var newUser =  user.initNewUser();
   		newUser.then(function(response){
    			var data = response.data;
    			user['user'] = data['new_user'];
    			console.log(user.isGuest());
    		});
    	
  }]);
