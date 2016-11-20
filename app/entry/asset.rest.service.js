"use strict";

/* eslint-disable no-invalid-this, consistent-this, object-shorthand,
 no-ternary, func-names, sort-keys, no-prototype-builtins,
 prefer-arrow-callback*/

angular.module("app").factory("Asset", function ($resource) {
	
	return $resource("http://localhost:8000/api/assets/:id", {id: "@id"},
		{
			query: {
				isArray: false,
				method: "GET"
			},
			update: {method: "PUT"}
		});
	
});

