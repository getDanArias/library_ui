"use strict";

/* eslint-disable no-invalid-this, consistent-this, object-shorthand,
 no-ternary, func-names, sort-keys, no-prototype-builtins */

angular.module("app").service("AssetDBService", function (Asset) {
	
	
	this.getAsset = (id) => Asset.get({id: id});
	
	this.getAssets = () => Asset.query();
	
	this.createAsset = (asset) => {
		
		this.asset = new Asset();
		this.asset = asset;
		
		Asset.save(this.asset);
		
	};
	
	this.changeAsset = (id, changedAsset) => {
		
		const asset = Asset.get({id: id}, () => {
			
			console.log(asset);
			console.log(asset.data);
			
			Asset.update({id: asset.data.id}, changedAsset);
			
		});
		
	};
	
});
