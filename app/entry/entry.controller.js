"use strict";

angular.module("app").controller("EntryController", ($scope) => {
	
	console.log("EntryController");
	
	$scope.asset = {
		author: "",
		category: "",
		media: "",
		source: "",
		title: ""
	};
	
	$scope.submitAsset = () => {
		
		console.log($scope.asset);
		
	};
	
});
