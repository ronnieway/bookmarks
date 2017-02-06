'use strict';

/**
 * @ngdoc service
 * @name bookmarksApp.catmanagement
 * @description
 * # catmanagement
 * Service in the bookmarksApp.
 */
angular.module('bookmarksApp')
	.service('catmanagement', function () {
	    var catsArray = [];
		new Promise(function(resolve) {
			let tref = firebase.database().ref().orderByKey();
			tref.once("value").then(function(snapshot) {
				snapshot.forEach(function(childSnapshot) {
					let theKey = childSnapshot.val();
					catsArray.push(theKey);
				});				
			});
		});
		return catsArray;
	});
