"use strict";

angular.module("app").service("AssetDBService", function (Asset) {
	
	this.getAsset = (id) => {
		
		return Asset.get({id: id});
		
	};
	
	this.getAssets = () => {
		
		return Asset.query();
		
	};
	
});