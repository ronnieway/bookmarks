'use strict';

/**
 * @ngdoc function
 * @name bookmarksApp.controller:HtmlCtrl
 * @description
 * # HtmlCtrl
 * Controller of the bookmarksApp
 */
angular.module('bookmarksApp')
	.controller('8Ctrl', ['$scope', '$location', '$anchorScroll', '$timeout', 'catmanagement', function ($scope, $location, $anchorScroll, $timeout, catmanagement) {
	    $scope.bookmarks = [
	    ];

	    $timeout(function(){
		    $scope.cats = catmanagement;
		    $scope.theCatName = catmanagement[7].name;
		}, 1000);

	    var bookmarksArray = [];
	    new Promise(function(resolve) {
			let tref = firebase.database().ref('8/').orderByKey();
			tref.once("value").then(function(snapshot) {
				snapshot.forEach(function(childSnapshot) {
					let eee = childSnapshot.val();
					let theId = childSnapshot.key;
					let theTitle = eee.title;
					let theUrl = eee.url;
					let theText = eee.text;
					if(theTitle) {
						bookmarksArray.push({id:theId, title:theTitle, url:theUrl, text:theText});
					}
				});				
			}).then(function() {
				$scope.bookmarks = bookmarksArray;
				$scope.$apply();
			});
		});

	    $scope.isCreating = false;
	    $scope.isEditing = false;

	    function startCreating() {
	    	$scope.isCreating = true;
	    	$scope.isEditing = false;
	    	resetCreateForm();
	    }

		function cancelCreating() {
	    	$scope.isCreating = false;
	    }

		function startEditing() {
	    	$scope.isCreating = false;
	    	$scope.isEditing = true;
	    }

		function cancelEditing() {
	    	$scope.isEditing = false;
	    }

	    $scope.startCreating = startCreating;
	    $scope.cancelCreating = cancelCreating;
	    $scope.startEditing = startEditing;
	    $scope.cancelEditing = cancelEditing; 

	    function showCreateDiv() {
	    	$location.hash('editFormHere');
			$anchorScroll();
	    	return !$scope.isEditing && $scope.isCreating;
	    }

	    function showEditDiv() {
	    	$location.hash('editFormHere');
			$anchorScroll();
	    	return $scope.isEditing && !$scope.isCreating;
	    }

	    $scope.showCreateDiv = showCreateDiv; 
	    $scope.showEditDiv = showEditDiv; 

	    function resetCreateForm() {
	    	$scope.newBookmark = {
	    		title:'', 
	    		url:'', 
	    		text:''
	    	};
	    }

		function createBookmark(bookmark) {
			let newPostKey = firebase.database().ref().child('1').push().key;
			bookmark.id = newPostKey;
			$scope.bookmarks.push(bookmark);
			resetCreateForm();
			$scope.isCreating = false;
			
			let updates = {};
			updates['/8/' + newPostKey] = bookmark;

			return firebase.database().ref().update(updates);
		}

		$scope.createBookmark = createBookmark;
		$scope.editedBookmark = null;

		function setEditedBookmark(bookmark) {
			console.log(bookmark);
			$scope.bookmark = bookmark;
		}

		$scope.setEditedBookmark = setEditedBookmark;

		function updateBookmark(bookmark) {
			$scope.editedBookmark = null;
			$scope.isEditing = false;

			let updates = {};
			let bookmarkUpdated = {id:bookmark.id, title:bookmark.title, url:bookmark.url, text:bookmark.text};

			updates['/8/' + bookmark.id] = bookmarkUpdated;

			return firebase.database().ref().update(updates);

		}

		$scope.updateBookmark = updateBookmark;

		function removeBookmark(bookmark) {
			$scope.editedBookmark = null;
			$scope.isEditing = false;

			let thisRef = '/8/' + bookmark.id;
			
			let theIndex = $scope.bookmarks.indexOf(bookmark);
			$scope.bookmarks.splice(theIndex, 1);

			return firebase.database().ref().child(thisRef).remove();
		}

		$scope.removeBookmark = removeBookmark;

	}]);

