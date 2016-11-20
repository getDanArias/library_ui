"use strict";

/* eslint-disable no-invalid-this, consistent-this, object-shorthand,
 no-ternary, func-names, sort-keys, no-prototype-builtins,
 prefer-arrow-callback, */

angular.module("app").service("CategoryDBService", function (Category) {
	
	this.getCategories = () => Category.query();
	
});
