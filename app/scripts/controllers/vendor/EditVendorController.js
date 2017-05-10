(function(module) {
	mifosX.controllers = _.extend(module, {				
		EditVendorController : function(scope,resourceFactory, 
				location, dateFilter,validator, $rootScope, routeParams) {
			
			scope.cities = [];
			scope.formData = {};
			
			scope.vendorId = routeParams.id;	
			
			resourceFactory.vendorManagementResource.getTemplateDetails({vendorId:routeParams.id, template:true}, function(data) {
				scope.formData = {
						vendorName:data.vendorName,
						contactName:data.contactName,
						entityType:data.entityType,
						residentialStatus:data.residentialStatus,
						otherEntity:data.otherEntity,
						otherResidential:data.otherResidential,
						emailId:data.emailId,
						mobileNo:data.mobileNo,
						landLineNo:data.landLineNo,
						address1:data.address1,
						address2:data.address2,
						address3:data.address3,
						city:data.city,
						state:data.state,
						country:data.country,
						postalCode:data.postalCode,
						fax:data.fax,
						bankName:data.bankName,
						accountNo:data.accountNo,
						branch:data.branch,
						ifscCode:data.ifscCode,
						swiftCode:data.swiftCode,
						ibanCode:data.ibanCode,
						accountName:data.accountName,
						chequeNo:data.chequeNo
				};
					scope.stateDatas = data.statesData;
					scope.cities = data.citiesData;
				    scope.entityType = data.entityTypeData;
				    scope.residentialStatus=data.residentialStatusData;
			});
			
			scope.getStateAndCountry=function(city){
		      	  resourceFactory.AddressTemplateResource.get({city :city}, function(data) {
					scope.formData.state = data.state;
					scope.formData.country = data.country;
		      	  });
		        };
				
			scope.submit = function() {			
				scope.formData.locale = $rootScope.locale.code;
								
				resourceFactory.vendorManagementResource.update({vendorId:scope.vendorId}, scope.formData, function(data) {
					location.path('/viewvendormanagement/' + data.resourceId);										
				});							
			};						
		}			
	});
	mifosX.ng.application.controller('EditVendorController', [ 
	'$scope', 
	'ResourceFactory', 
	'$location', 
	'dateFilter',
	'HTValidationService', 
	'$rootScope',
	'$routeParams',
	mifosX.controllers.EditVendorController 
	]).run(function($log) {
		$log.info("EditVendorController initialized");	
	});
}(mifosX.controllers || {}));
