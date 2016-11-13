"use strict";

angular.module("app").controller("EntryController", ($scope, Asset, DBUtil) => {
	
	$scope.asset = new Asset();
	
	$scope.asset.data = {
		author: "",
		category: "",
		media: "",
		source: "",
		title: "",
		type: ""
	};
	
	$scope.submitAsset = () => {
		
		$scope.asset.data.author =
			DBUtil.postgresStringifyListProperty($scope.asset.data.author);
		$scope.asset.data.category =
			DBUtil.postgresStringifyListProperty($scope.asset.data.category);

		Asset.save($scope.asset.data, () => {
			// Promise logic
		});
		
	};
	
});
