"use strict";
console.log ("MushroomFactory");

app.factory("MushroomFactory", function($q, $http) {

	let getAllMushrooms = () => {
		let mushroomsInArray = [];
		return $q ((resolve, reject) => {
			$http.get('https://mushrooms-8f9ca.firebaseio.com/mushrooms.json')
			.then((itemObject) => { 
			let itemCollection = itemObject.data;
			console.log ("itemCollection", itemCollection);
			Object.keys(itemCollection).forEach((key) => {
				mushroomsInArray.push(itemCollection[key]);
			});
			console.log ("mushroomsInArray", mushroomsInArray);
			resolve(mushroomsInArray);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return{getAllMushrooms};
});