(function(module) {
	mifosX.controllers = _.extend(module, {				
		CreateVendorController : function(scope,resourceFactory, 
				location, dateFilter,validator, $rootScope,$upload,API_VERSION) {
			
			scope.cities = [];
			scope.formData = {};
			//scope.file = [];
			
			resourceFactory.vendorTemplateResource.getTemplateDetails(function(data) {
				scope.countryDatas = data.countryData;
				scope.stateDatas = data.stateData;
				scope.cities = data.citiesData;
				scope.entitytypedata = data.entityTypeData;
				scope.residentialStatus = data.residentialStatusData;
			});
			scope.getStateAndCountry=function(city){
				
		      	  resourceFactory.AddressTemplateResource.get({city :city}, function(data) {
		          		scope.formData.state = data.state;
		          		scope.formData.country = data.country;
		      	  });
		        };
		        
			
			scope.addbankdetails = function(){
				
			}

			scope.file = [];
		    scope.onFileSelect = function($files) {
		    	scope.files = $files[0];
			       
			       /*scope.file.push(scope.files);
			       console.log(scope.file);*/
			    };
			    
			    scope.fileArray = [];
			    scope.fileFormData = {};
			    scope.residentialProofAdd = function(){
			    	
			    	console.log("Ho");
			    	
			    	scope.fileFormData.name = scope.formData.residentialStatus;
			    	
			    	scope.fileArray.push(scope.files);
			    	//console.log(scope.fileArray);
			    	//scope.fileFormData.name = "BBC"
			    	/*$upload.upload({
				          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
				          data: scope.fileFormData,
				          file: scope.file
				        }).then(function(data) {
				          // to fix IE not refreshing the model
				          if (!scope.$$phase) {
				            scope.$apply();
				          }
				        });*/

	            };
			    
			    
			    //original
			    
			    /*scope.fileFormData = {};
			    scope.residentialProofAdd = function(){
			    	
			    	scope.fileFormData.name = scope.formData.residentialStatus;
			    	//scope.fileFormData.name = "BBC"
			    	$upload.upload({
				          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
				          data: scope.fileFormData,
				          file: scope.file
				        }).then(function(data) {
				          // to fix IE not refreshing the model
				          if (!scope.$$phase) {
				            scope.$apply();
				          }
				        });

	            };*/
	            
	            scope.chequeFormData = {};
			    scope.chequeNoProofAdd = function(){
			    	
			    	
			    	scope.fileArray.push(scope.files);
			    	console.log(scope.fileArray);
			    	
			    	//scope.chequeFormData.name = "BCC"
			    	/*scope.chequeFormData.name = scope.formData.ibanCode;
			    	$upload.upload({
				          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
				          data: scope.chequeFormData,
				          file: scope.file
				        }).then(function(data) {
				          // to fix IE not refreshing the model
				          if (!scope.$$phase) {
				            scope.$apply();
				          }
				        });*/

	            };
				
			scope.submit = function() {	
				
				this.formData.locale = $rootScope.locale.code;
				
				
				
				resourceFactory.vendorManagementResource.save(this.formData, function(data) {
					
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
