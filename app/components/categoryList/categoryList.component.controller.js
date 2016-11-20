"use strict";

/* eslint-disable no-invalid-this, consistent-this */

angular.module("app").controller("CategoryListController",
	function clCtrl (CategoryDBService) {
	
		console.log("CategoryListController");
		
		this.categories = CategoryDBService.getCategories();
		
		console.log(this.categories);
	
	});
