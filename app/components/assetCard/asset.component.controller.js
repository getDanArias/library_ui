"use strict";

angular.module("app").controller("AssetComponentController",
	function($scope, Asset) {
	
	console.log("AssetComponentController");
	
	$scope.hello = () => {
		console.log("Hello, I am:");
		console.log(this.asset);
	}
	
});
