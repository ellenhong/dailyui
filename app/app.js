'use strict';

// Declare app level module which depends on views, and components
var dailyUiApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

dailyUiApp.controller('ImagesController', ["$scope", function($scope) {
	$scope.items = [
	{num: '001', name: 'Sign Up', img: 'img/001.png'},
	{num: '002', name: 'Checkout', img: 'img/002.png'},
	{num: '003', name: 'Landing Page', img: 'img/003.png'},
	{num: '004', name: 'Calculator', img: 'img/004.png'},
	{num: '005', name: 'App Icon', img: 'img/005.png'},
	{num: '006', name: 'User Profile', img: 'img/006.png'},
	{num: '007', name: 'Settings', img: 'img/007.png'},
	{num: '008', name: '404 Page', img: 'img/008.png'},
	{num: '009', name: 'Music Player', img: 'img/009.png'},
	{num: '010', name: 'Social Share', img: 'img/010.png'},
	{num: '011', name: 'Flash Message', img: 'img/011.png'},
	{num: '012', name: 'E-Commerce', img: 'img/012.png'},
	{num: '013', name: 'Direct Messaging', img: 'img/013.png'},
	{num: '014', name: 'Countdown Timer', img: 'img/014.png'},
	{num: '015', name: 'On/Off Switch', img: 'img/015.gif'},
	{num: '016', name: 'Pop-Up/Overlay', img: 'img/016.png'},
	{num: '017', name: 'Email Receipt', img: 'img/017.png'},
	{num: '018', name: 'Analytics Chart', img: 'img/018.png'},
	{num: '019', name: 'Leaderboard', img: 'img/019.png'},
	{num: '020', name: 'Location Tracker', img: 'img/020.png'},
	{num: '021', name: 'Home Monitoring', img: 'img/021.png'},
	{num: '022', name: 'Search', img: 'img/022.png'},
	{num: '023', name: 'Onboarding', img: 'img/023.png'},
	{num: '024', name: 'Boarding Pass', img: 'img/024.png'},
	{num: '025', name: 'TV App', img: 'img/025.png'},
	{num: '026', name: 'Subscribe', img: 'img/026.png'}
	];

	$scope.propertyName = 'num';
	$scope.reverse = true;

	$scope.sortBy = function(propertyName, reverse) {
		$scope.reverse = reverse;
		$scope.propertyName = propertyName;
	}

}]);


