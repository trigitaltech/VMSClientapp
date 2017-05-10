(function(module) {
	mifosX.controllers = _.extend(module, {				
		CreateOtherVendorController : function(scope,resourceFactory, 
				location, dateFilter,validator, $rootScope, routeParams, $upload, API_VERSION) {
			
			scope.cities = [];
			scope.formData = {};
			scope.vendorId = routeParams.id;
			
			
			scope.formData.msmRegDate = dateFilter(new Date(), 'dd MMMM yyyy');
		    scope.onFileSelect = function($files) {
		        scope.file = $files[0];
		    };
			
			scope.submit = function() {	
				
				scope.formData.locale = $rootScope.locale.code;
				scope.formData.dateFormat = 'dd MMMM yyyy';
				scope.formData.vendorId = scope.vendorId;
		          	
				/*$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/clients/'+scope.clientId+'/documents', 
			          data: scope.formData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			          location.path('/viewclient/'+scope.clientId);
			        });*/
				
				resourceFactory.vendorOtherDetailsResource.save(this.formData, function(data) {
					location.path('/vendormanagement');		
					
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
					
				});							
			};						
		}			
	});
	mifosX.ng.application.controller('CreateOtherVendorController', [ 
	'$scope', 
	'ResourceFactory', 
	'$location', 
	'dateFilter',
	'HTValidationService', 
	'$rootScope',
	'$routeParams',
	'$upload', 
	'API_VERSION',
	mifosX.controllers.CreateOtherVendorController 
	]).run(function($log) {
		$log.info("CreateOtherVendorController initialized");	
	});
}(mifosX.controllers || {}));
