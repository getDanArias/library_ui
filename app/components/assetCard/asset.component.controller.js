"use strict";

angular.module("app").controller("AssetComponentController", function($scope, DBUtil, Asset) {
	
	console.log("AssetComponentController");
	
	let localAsset = this.asset;
	
	$scope.editing = false;
	
	$scope.hello = () => {
		console.log("Hello, I am:");
		console.log(this.asset);
		// $scope.editing = true;
	};
	
	$scope.updatedAsset = {};
	
	$scope.changeAsset = () => {
		
		let asset = Asset.get({id: localAsset.id}, () => {
			
			console.log(asset);
			console.log(asset.data);
			
			localAsset.author =
				DBUtil.postgresStringifyListProperty(localAsset.author);
			localAsset.category =
				DBUtil.postgresStringifyListProperty(localAsset.category);
			
			Asset.update({id: asset.data.id}, localAsset);
			
		});
		
	};
	
});
