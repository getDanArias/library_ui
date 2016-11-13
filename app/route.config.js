"use strict";

/* eslint-disable object-curly-newline */

const libraryRoutersConfig = ($routeProvider) => {

	$routeProvider.
	when("/home", {
		controller: "HomeController",
		templateUrl: "home/home.html"
	}).
	when("/signin", {
		templateUrl: "signin/signin.html"
	}).
	when("/entry", {
		controller: "EntryController",
		templateUrl: "entry/entry.html"
	}).
	when("/command-center", {
		controller: "CommandCenterController",
		templateUrl: "commandCenter/command.center.html"
	}).
	otherwise({
		redirectTo: "/home"
	});

};

angular.module("app").config(libraryRoutersConfig);
