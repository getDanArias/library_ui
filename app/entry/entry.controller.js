"use strict";

angular.module("app").controller("EntryController",
	($scope, AssetDBService) => {
	
		$scope.asset = {
			author: "",
			category: "",
			media: "",
			source: "",
			title: "",
			type: ""
		};
		
		$scope.submitAsset = () => {
			
			AssetDBService.createAsset($scope.asset);
			
		};
		
	});
