'use strict';

// Declare app level module which depends on views, and components
var dailyUiApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

dailyUiApp.controller('ImagesController', ["$scope", function($scope) {
	$scope.items = [
	{num: '001', name: 'Sign Up', img: 'app/img/001.png'},
	{num: '002', name: 'Checkout', img: 'app/img/002.png'},
	{num: '003', name: 'Landing Page', img: 'app/img/003.png'},
	{num: '004', name: 'Calculator', img: 'app/img/004.png'},
	{num: '005', name: 'App Icon', img: 'app/img/005.png'},
	{num: '006', name: 'User Profile', img: 'app/img/006.png'},
	{num: '007', name: 'Settings', img: 'app/img/007.png'},
	{num: '008', name: '404 Page', img: 'app/img/008.png'},
	{num: '009', name: 'Music Player', img: 'app/img/009.png'},
	{num: '010', name: 'Social Share', img: 'app/img/010.png'},
	{num: '011', name: 'Flash Message', img: 'app/img/011.png'},
	{num: '012', name: 'E-Commerce', img: 'app/img/012.png'},
	{num: '013', name: 'Direct Messaging', img: 'app/img/013.png'},
	{num: '014', name: 'Countdown Timer', img: 'app/img/014.png'},
	{num: '015', name: 'On/Off Switch', img: 'app/img/015.gif'},
	{num: '016', name: 'Pop-Up/Overlay', img: 'app/img/016.png'},
	{num: '017', name: 'Email Receipt', img: 'app/img/017.png'},
	{num: '018', name: 'Analytics Chart', img: 'app/img/018.png'},
	{num: '019', name: 'Leaderboard', img: 'app/img/019.png'},
	{num: '020', name: 'Location Tracker', img: 'app/img/020.png'},
	{num: '021', name: 'Home Monitoring', img: 'app/img/021.png'},
	{num: '022', name: 'Search', img: 'app/img/022.png'},
	{num: '023', name: 'Onboarding', img: 'app/img/023.png'},
	{num: '024', name: 'Boarding Pass', img: 'app/img/024.png'},
	{num: '025', name: 'TV App', img: 'app/img/025.png'},
	{num: '026', name: 'Subscribe', img: 'app/img/026.png'},
	{num: '027', name: 'Dropdown', img: 'app/img/027.png'},
	{num: '028', name: 'Contact Us', img: 'app/img/028.png'},
	{num: '029', name: 'Map', img: 'app/img/029.png'},
	{num: '030', name: 'Pricing', img: 'app/img/030.png'}
	];

	$scope.currItem;
	$scope.currIndex;
	$scope.nextItem;
	$scope.prevItem;

	$scope.getItem = function(item) {
		$scope.currItem = item;
	}

	// Go to previous item
	$scope.prev = function() {
		$scope.currIndex = $scope.items.indexOf($scope.currItem);
		$scope.prevItem = $scope.items[$scope.currIndex - 1];

		// update currItem
		$scope.currItem = $scope.prevItem;
	}

	// Go to next item
	$scope.next = function() {
		$scope.currIndex = $scope.items.indexOf($scope.currItem);
		$scope.nextItem = $scope.items[$scope.currIndex + 1];

		// update currItem
		$scope.currItem = $scope.nextItem;

	}

	$scope.propertyName = 'num';
	$scope.reverse = true;

	// Sort grid items by category (latest or chronological)
	$scope.sortBy = function(propertyName, reverse) {
		$scope.reverse = reverse;
		$scope.propertyName = propertyName;
	}

	

}]);


