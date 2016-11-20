"use strict";

/* eslint-disable object-curly-newline */

const libraryRoutersConfig = ($routeProvider) => {
	
	$routeProvider.when("/", {
		templateUrl: "home/home.html"
	})
	.when("/home", {
		templateUrl: "home/home.html"
	})
	.when("/signin", {
		templateUrl: "signin/signin.html"
	})
	.when("/entry", {
		controller: "EntryController",
		templateUrl: "entry/entry.html"
	})
	.when("/update", {
		controller: "UpdateController",
		templateUrl: "entry/update.entry.html"
	})
	.when("/command-center", {
		controller: "CommandCenterController",
		templateUrl: "commandCenter/command.center.html"
	})
	.otherwise({
		redirectTo: "/home"
	});

};

angular.module("app").config(libraryRoutersConfig);
