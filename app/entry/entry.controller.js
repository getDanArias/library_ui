"use strict";

angular.module("app").controller("EntryController", ($scope, Asset) => {
	
	$scope.asset = new Asset();
	
	$scope.asset = {
		author: "",
		category: "",
		media: "",
		source: "",
		title: "",
		type: ""
	};
	
	$scope.submitAsset = () => {
		
		// $scope.asset.author =
		// 	DBUtil.postgresStringifyListProperty($scope.asset.author);
		// $scope.asset.category =
		// 	DBUtil.postgresStringifyListProperty($scope.asset.category);

		Asset.save($scope.asset, () => {
			// Promise logic
		});

		
	};
	
});
