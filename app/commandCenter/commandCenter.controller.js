"use strict";

angular.module("app").controller("CommandCenterController", ($scope, Asset) => {
	
	console.log("CommandCenterController");
	
	$scope.assetID = null;
	$scope.asset = null;
	$scope.assets = null;
	
	$scope.getAsset = () => {
		
		$scope.asset = Asset.get({id: $scope.assetID}, () => {
			
			console.log($scope.asset);
			console.log($scope.asset.data);
			
		});
		
	};
	
	$scope.getAssets = () => {
		
		$scope.assets = Asset.query(() => {
			
			console.log($scope.assets.data);
			
		});
		
	}
	
});
