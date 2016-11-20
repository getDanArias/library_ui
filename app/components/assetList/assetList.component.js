"use strict";

angular.module("app").component("assetList", {
	// bindings: {assets: "="},
	controller: "AssetListController",
	
	// controller: function (AssetDBService) {
	// 	console.log("AssetListController: the Parent");
	// 	// console.log(AssetDBService);
	// 	//
	// 	// console.log(AssetDBService.getAssets());
	//
	//
	//
	// 	// this.sayName();
	// 	//
	// 	this.assets = AssetDBService.getAssets();
	//
	// 	this.refreshAssets = () => {
	// 		this.assets = AssetDBService.getAssets();
	// 	};
	//
	//
	//
	// },
	
	templateUrl: "components/assetList/assetList.component.html",
	transclude: true
});
