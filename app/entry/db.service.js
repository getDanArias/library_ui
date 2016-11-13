"use strict";

angular.module("app").service("DBUtil", function DBService () {
	
	const SINGLE_INC = 1;
	
	this.postgresStringifyListProperty = (prop) => {
		
		const array = prop.toString().split(/\s*,\s*/);
		const OFFSET = 1;
		const LAST_ELEMENT = array.length - OFFSET;
		const FIRST_ELEMENT = 0;
		const ONE_ELEMENT = 1;
		
		let postgresStringArray = "";
		
		for (let element = FIRST_ELEMENT;
		element < array.length; element += SINGLE_INC) {
			
			if (array.length === ONE_ELEMENT) {
				
				// There is only one element in the array
				
				postgresStringArray += `{"${array[element]}"}`;
				
			} else if (element === FIRST_ELEMENT) {
				
				// We are looking at the first element
				
				postgresStringArray += `{"${array[element]}", `;
				
			} else if (element === LAST_ELEMENT) {
				
				// We are looking at the last element
				
				postgresStringArray += `"${array[element]}"}`;
				
			} else {
				
				// We are looking at an in-between element
				
				postgresStringArray += `"${array[element]}", `;
				
			}
			
		}
		
		return postgresStringArray;
		
	};
	
});
