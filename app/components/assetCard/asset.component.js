"use strict";

angular.module("app").component("assetCard", {
	// Isolated scope binding
	bindings: {
		asset: '='
	},
	templateUrl: '/components/assetCard/asset.component.html',
	controller: 'AssetComponentController'
});