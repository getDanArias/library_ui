"use strict";

angular.module("app").controller("EntryController", ($scope, Asset) => {
	
	console.log("EntryController");
	
	$scope.asset = {
		author: "",
		category: "",
		media: "",
		source: "",
		title: "",
		type: ""
	};

	$scope.submitAsset = () => {
		
		console.log($scope.asset + Asset);
		
	};
	
});
