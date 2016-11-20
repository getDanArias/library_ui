"use strict";

angular.module("app").component("categoryCard", {
	
	bindings: {
		name: "="
	},
	controller: function () {
		
		this.counter = 0;
		
		let frequency = .3;
		
		
		let i = this.name.toUpperCase();
		
		if (i[0] == '.') {
			console.log(this.name);
			i = -33;
		} else {
			i = i.charCodeAt(0) - 97;
		}
		
		console.log(`${this.name} : ${i}`);
		
		
		let red = Math.sin(frequency * i) * 127 + 128;
		let green = Math.sin(frequency * i + 2) * 127 + 128;
		let blue =  Math.sin(frequency * i + 4) * 127 + 128;
		
		// console.log(`${red}`);
		
		let byte2Hex = (n) =>
		{
			var nybHexString = "0123456789ABCDEF";
			return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
		};
		
		let RGB2Color = (r,g,b) =>
		{
			return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
		};
		
		this.color = {
			"background-color" : RGB2Color(red, green, blue),
			"opacity": "0.7",
			"color": "black"
		};
		
		this.text = {
			"opacity": "1",
				"color": "black"
		};
		
	},
	template: `
<div class="category" ng-style="$ctrl.color">
		<span ng-style="$ctrl.text">{{$ctrl.name}}</span>
	</div>`
	
});