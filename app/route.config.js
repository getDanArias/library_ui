"use strict";

/* eslint-disable object-curly-newline */

const libraryRoutersConfig = ($routeProvider) => {
	
	$routeProvider.
	when("/", {
		templateUrl: "main.html"
	}).
	when("/home", {
		templateUrl: "home/home.html"
	}).
	when("/signin", {
		templateUrl: "signin/signin.html"
	}).
	when("/entry", {
		controller: "EntryController",
		templateUrl: "entry/entry.html"
	});
	
};

angular.module("app").config(libraryRoutersConfig);
