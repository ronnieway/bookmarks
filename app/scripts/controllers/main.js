'use strict';

/**
 * @ngdoc function
 * @name bookmarksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookmarksApp
 */
angular.module('bookmarksApp')
	.controller('MainCtrl', ['$scope', '$route', '$timeout', 'catmanagement', function ($scope, $route, $timeout, catmanagement) {
	    
	    $timeout(function(){
	    	$scope.cats = catmanagement;
	    }, 1000);
		

	    $scope.changeStatus = function(event, ngstatus) {
	    	let id = event.target.id;
	    	let thisRef = id.slice(5);
	    	let fff = ngstatus;
	    	if (fff === 0) {
	    		fff = 1;
	    	} else {
	    		fff = 0;
	    	}
			catmanagement[thisRef - 1].status = fff;
			$route.reload();

	    	new Promise(function(resolve) {
				let tref = firebase.database().ref();
				tref.once("value").then(function(snapshot) {					
					return firebase.database().ref().child(thisRef).update({status: fff});
				});
			});
	    };

	    $scope.changeName = function() {
	    	let id = event.target.id;
	    	let thisRef = id.slice(5); 

	    	new Promise(function(resolve) {
				let tref = firebase.database().ref();
				tref.once("value").then(function(snapshot) {
					let fff = document.getElementById('input' + thisRef).value;
					catmanagement[thisRef - 1].name = fff;
					$route.reload();				
					return firebase.database().ref().child(thisRef).update({name: fff});
				});
			});
	    };

	}]);

