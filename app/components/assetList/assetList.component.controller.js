"use strict";

/* eslint-disable no-invalid-this, consistent-this, object-shorthand,
	no-ternary, func-names, sort-keys, no-prototype-builtins */

angular.module("app").controller("AssetListController",
	function alCtrl (AssetDBService, $uibModal, $document) {
	
		const $ctrl = this;
		
		const FIRST_ELEMENT = 0;
		
		$ctrl.assetCopy = null;
		
		const array2String = function array2String (array) {
			
			// const array = prop.toString().split(/\s*,\s*/);
			const OFFSET = 1;
			const LAST_ELEMENT = array.length - OFFSET;
			const ONE_ELEMENT = 1;
			
			const SINGLE_INC = 1;
			
			let string = "";
			
			for (let element = FIRST_ELEMENT;
				element < array.length; element += SINGLE_INC) {
				
				if (array.length === ONE_ELEMENT) {
					
					// There is only one element in the array
					
					string += `${array[element]}`;
					
				} else if (element === FIRST_ELEMENT) {
					
					// We are looking at the first element
					
					string += `${array[element]}, `;
					
				} else if (element === LAST_ELEMENT) {
					
					// We are looking at the last element
					
					string += `${array[element]}`;
					
				} else {
					
					// We are looking at an in-between element
					
					string += `${array[element]}, `;
					
				}
				
			}
			
			return string;
			
		};
		
		const string2Array = (string) => string.toString().split(/\s*,\s*/);
		
		
		$ctrl.assets = AssetDBService.getAssets();
		
		$ctrl.animationsEnabled = true;
		
		$ctrl.open = function open (asset, size, parentSelector) {
			
			console.log("Opened Edit Modal");
			
			console.log(asset);
			
			const assetBundle = {
				asset: asset,
				assetCopy: null
			};
			
			assetBundle.assetCopy = JSON.parse(JSON.stringify(asset));
			
			assetBundle.assetCopy.author =
				array2String(assetBundle.assetCopy.author);
			assetBundle.assetCopy.category =
				array2String(assetBundle.assetCopy.category);
			
			console.log(assetBundle);
			
			const parentElem = parentSelector
				? angular.element($document[FIRST_ELEMENT]
					.querySelector(`.modal-demo ${parentSelector}`))
				: null;
			
			const modalInstance = $uibModal.open({
				
				animation: $ctrl.animationsEnabled,
				ariaLabelledBy: "modal-title",
				ariaDescribedBy: "modal-body",
				templateUrl: "components/assetCard/asset.modal.html",
				controller: "ModalInstanceCtrl",
				controllerAs: "$ctrl",
				size: size,
				appendTo: parentElem,
				resolve: {
					assetBundle: function () {
						
						return assetBundle;
						
					}
				}
				
			});
			
			modalInstance.result.then((bundle) => {
				
				bundle.assetCopy.author =
					string2Array(bundle.assetCopy.author);
				bundle.assetCopy.category =
					string2Array(bundle.assetCopy.category);
				
				for (const property in bundle.assetCopy) {
					
					if (bundle.asset.hasOwnProperty(property)) {
						
						bundle.asset[property] = bundle.assetCopy[property];
						
					}
					
				}
				
				$ctrl.selected = bundle.asset;
				console.log("Received in modalInstnace");
				console.log(`Modal selection: ${$ctrl.selected}`);
				console.log($ctrl.selected);
			
			}, () => {
				
				console.log(`Modal dismissed at: ${new Date()}`);
				
			});
			
		};
	
	});

angular.module("app").controller("ModalInstanceCtrl",
	function ($uibModalInstance, assetBundle) {
	
		console.log("This is the controller of the Modal");
		console.log("It received this asset:");
		console.log(assetBundle);
		
		const $ctrl = this;
		
		$ctrl.assetBundle = assetBundle;
		
		$ctrl.asset = $ctrl.assetBundle.assetCopy;
		
		// $ctrl.selected = {
		// 	item: $ctrl.assets[0]
		// };
		
		$ctrl.ok = function () {
			
			$uibModalInstance.close($ctrl.assetBundle);
			
		};
		
		$ctrl.cancel = function () {
			
			$uibModalInstance.dismiss("cancel");
			
		};
	
	});

