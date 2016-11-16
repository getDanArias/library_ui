"use strict";

angular.module("app").controller("CommandCenterController", ($scope, AssetDBService) => {
	
	console.log("CommandCenterController");
	
	$scope.assetID = null;
	$scope.asset = null;
	$scope.assets = null;
	
	$scope.assets = AssetDBService.getAssets();
	
	$scope.getAsset = () => {
		$scope.asset = AssetDBService.getAsset($scope.assetID);
	}
	
});
