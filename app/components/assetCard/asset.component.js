"use strict";

/* eslint-disable no-invalid-this, consistent-this, object-shorthand,
 no-ternary, func-names, sort-keys, no-prototype-builtins */

angular.module("app").component("assetCard", {
	
	bindings: {
		asset: "=",
		open: "&"
	},
	controller: "AssetComponentController",
	templateUrl: "/components/assetCard/asset.component.html"
	
});
