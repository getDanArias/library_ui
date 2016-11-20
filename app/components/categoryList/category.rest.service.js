"use strict";

/* eslint-disable no-invalid-this, consistent-this, object-shorthand,
 no-ternary, func-names, sort-keys, no-prototype-builtins,
 prefer-arrow-callback, */

angular.module("app").factory("Category", function cSvc ($resource) {
	
	return $resource("http://localhost:8000/api/categories/:id", {id: "@id"},
		{
			query: {
				isArray: false,
				method: "GET"
			},
			update: {method: "PUT"}
		});
	
	
});

