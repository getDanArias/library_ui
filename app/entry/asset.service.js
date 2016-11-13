"use strict";

angular.module("app").factory("Asset", ($resource) =>
	$resource("http://localhost:8000/api/assets/:id", {id: "@id"},
		{
			query: {
				isArray: false,
				method: "GET"
			},
			update: {method: "PUT"}
		})
);

