"use strict";

angular.module("app").component("assetCard", {
	bindings: {asset: "="},
	controller: "AssetComponentController",
	templateUrl: "/components/assetCard/asset.component.html"
});
