(function(module) {
	mifosX.controllers = _.extend(module, {				
		CreateVendorController : function(scope,resourceFactory, 
				location, dateFilter,validator, $rootScope,$upload,API_VERSION) {
			
			scope.cities = [];
			//scope.countryDatas = [];
			scope.formData = {};
			
			
			resourceFactory.vendorTemplateResource.getTemplateDetails(function(data) {
				scope.countryDatas = data.countryData;
				scope.stateDatas = data.stateData;
				scope.cities = data.citiesData;
				scope.entitytypedata = data.entityTypeData;
				scope.residentialStatus = data.residentialStatusData;
				//scope.countryDatas = data.countryData;
			});
			scope.getStateAndCountry=function(city){
				
		      	  resourceFactory.AddressTemplateResource.get({city :city}, function(data) {
		          		scope.formData.state = data.state;
		          		scope.formData.country = data.country;
		      	  });
		        };
			
			scope.addbankdetails = function(){
				
			}
			
			scope.onFileSelect = function($files) {
		          scope.file = $files[0];
		        };

			scope.submit = function() {	
				
				this.formData.locale = $rootScope.locale.code;
								
				resourceFactory.vendorManagementResource.save(this.formData, function(data) {
					
					scope.formData.name = "ABC";
					$upload.upload({
				          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+data.resourceId+'/documents', 
				          data: scope.formData,
				          file: scope.file
				        }).then(function(data) {
				          // to fix IE not refreshing the model
				          if (!scope.$$phase) {
				            scope.$apply();
				          }
				          //location.path('/viewclient/'+scope.clientId);
				        });
					location.path('/vendormanagement');										
				});							
			};						
		}			
	});
	mifosX.ng.application.controller('CreateVendorController', [ 
	'$scope', 
	'ResourceFactory', 
	'$location', 
	'dateFilter',
	'HTValidationService', 
	'$rootScope',
	'$upload',
	'API_VERSION',
	mifosX.controllers.CreateVendorController 
	]).run(function($log) {
		$log.info("CreateVendorController initialized");	
	});
}(mifosX.controllers || {}));
