"use strict";

angular.module("app").controller("HomeController", ($scope) => {

	console.log("HomeController");

	$scope.searchValue = "test";


	$scope.books = [{
		author: ["Michael Hartl", "Jeff Hage"],
		category: ["Rails", "Web Development", "Ruby"],
		id: 1,
		media: "book",
		source: "https://www.railstutorial.org/book",
		title: "Ruby on Rails Tutorial: Learn Web Development with Rails",
		type: "tutorial"
	}];

});
