"use strict";


angular.module("app").controller("EntryController", ($scope) => {
	
	console.log("EntryController");
	
	$scope.singleModel = 1;
	
	$scope.mode = 'Delivery';
	
	$scope.asset = {
		media: "",
		title: "",
		author: "",
		source: "",
		category: ""
	};
	
	$scope.submit_asset = () => {
		console.log($scope.asset);
	}
	
});