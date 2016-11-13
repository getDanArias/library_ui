"use strict";

angular.module("app").controller("EntryController", ($scope, Asset) => {
	
	console.log("EntryController");
	
	const SINGLE_INC = 1;
	
	$scope.asset = new Asset();
	
	$scope.asset.data = {
		author: "",
		category: "",
		media: "",
		source: "",
		title: "",
		type: ""
	};
	
	const postgresStringifyListProperty = (prop) => {
		
		const array = prop.toString().split(/\s*,\s*/);
		const OFFSET = 1;
		const LAST_ELEMENT = array.length - OFFSET;
		const FIRST_ELEMENT = 0;
		const ONE_ELEMENT = 1;
		
		let postgresStringArray = "";
		
		for (let element = FIRST_ELEMENT;
				element < array.length; element += SINGLE_INC) {
			
			if (array.length === ONE_ELEMENT) {
				
				// There is only one element in the array
				
				postgresStringArray += `{"${array[element]}"}`;
				
			} else if (element === FIRST_ELEMENT) {
				
				// We are looking at the first element
				
				postgresStringArray += `{"${array[element]}", `;
				
			} else if (element === LAST_ELEMENT) {
				
				// We are looking at the last element
				
				postgresStringArray += `"${array[element]}"}`;
				
			} else {
				
				// We are looking at an in-between element
				
				postgresStringArray += `"${array[element]}", `;
				
			}
			
		}
		
		return postgresStringArray;
	
	};
	
	$scope.submitAsset = () => {
		
		$scope.asset.data.author =
			postgresStringifyListProperty($scope.asset.data.author);
		$scope.asset.data.category =
			postgresStringifyListProperty($scope.asset.data.category);

		Asset.save($scope.asset.data, () => {
			// Promise logic
		});

		
	};
	
});
