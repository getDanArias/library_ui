"use strict";

angular.module("app").factory("Asset", function($resource) {
	
	return $resource("http://localhost:8000/api/assets/:id", {id: "@id"},
		{
			query: {
				isArray: false,
				method: "GET"
			},
			update: {method: "PUT"}
		});
	
});

