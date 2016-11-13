"use strict";

angular.module("app").filter("PrettyJSON",
	() => (json) => JSON.stringify(json, null, " ")
);
