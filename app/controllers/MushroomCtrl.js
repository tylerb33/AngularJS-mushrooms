"use strict";
console.log ("MushroomCtrl");
	let arrayOfMushrooms = [];

app.controller("MushroomCtrl", function($scope, MushroomFactory) {

	MushroomFactory.getAllMushrooms()
	.then(function(itemCollection) {
		$scope.mushrooms = itemCollection;
	});

});