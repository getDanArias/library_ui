"use strict";

/* eslint-disable no-invalid-this, consistent-this, object-shorthand,
 no-ternary, func-names, sort-keys, no-prototype-builtins */

angular.module("app").controller("AssetComponentController",
	function (AssetDBService) {
		
		console.log("AssetComponentController");
		
		
		this.changeAsset = () => {
			
			console.log(this.assetCopy);
			
			AssetDBService.changeAsset(this.assetCopy.id, this.assetCopy);
			
			console.log("Changed asset");
			
			// this.parent.refreshAssets();
			
		};
		
	});
