"use strict";

var app = angular.module("MushroomApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/option.html',
		controller: 'MushroomCtrl'
	}).
	otherwise('/option');
});


// routeProvider looks at URL, and displays content based on that