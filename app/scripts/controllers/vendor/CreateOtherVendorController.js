(function(module) {
	mifosX.controllers = _.extend(module, {				
		CreateOtherVendorController : function(scope,resourceFactory, 
				location, dateFilter,validator, $rootScope, routeParams, $upload, API_VERSION) {
			
			scope.cities = [];
			scope.formData = {};
			scope.vendorId = routeParams.id;
			scope.formData.dateFormat = 'dd MMMM yyyy';
			scope.formData.vendorId = scope.vendorId;
				
			scope.formData.msmRegDate = dateFilter(new Date(), 'dd MMMM yyyy');
			
			scope.file = [];
		    scope.onFileSelect = function($files) {
		        scope.file = $files[0];
		        
		        /*scope.file.push(scope.files);
			       console.log(scope.file);*/
		    };
			
			
		    scope.pnoOtherFormData = {};
		    scope.permanentAccNo = function(){
		    	
		    	scope.pnoOtherFormData.name = "PNO"
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents', 
			          data: scope.pnoOtherFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };
            
            scope.certificateincorpFormData = {};
		    scope.certificateincorp = function(){
		    	
		    	scope.certificateincorpFormData.name = "CIN"
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents', 
			          data: scope.certificateincorpFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };
            
            scope.serviceTaxRegnnoFormData = {};
		    scope.serviceTaxRegnno = function(){
		    	
		    	scope.serviceTaxRegnnoFormData.name = "STR"
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents', 
			          data: scope.serviceTaxRegnnoFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };
            
            scope.exciseNoFormData = {};
		    scope.exciseNo = function(){
		    	
		    	scope.exciseNoFormData.name = "ENO"
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents', 
			          data: scope.exciseNoFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };
            //microsmall
            scope.microsmallFormData = {};
		    scope.microsmall = function(){
		    	
		    	scope.microsmallFormData.name = "MSM"
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents', 
			          data: scope.microsmallFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };
            //vat
            scope.vatRegnnoFormData = {};
		    scope.vatRegnno = function(){
		    	
		    	scope.vatRegnnoFormData.name = "VRN"
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+5+'/documents', 
			          data: scope.vatRegnnoFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };
            //gst
            scope.gstRegnnoFormData = {};
		    scope.gstRegnno = function(){
		    	
		    	scope.gstRegnnoFormData.name = "GST"
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+4+'/documents', 
			          data: scope.gstRegnnoFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };
            //cst
            scope.cstRegnnoFormData = {};
		    scope.cstRegnno = function(){
		    	
		    	scope.cstRegnnoFormData.name = "CST"
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+3+'/documents', 
			          data: scope.cstRegnnoFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };
            
		    
			scope.submit = function() {	
				
				/*scope.formData.locale = $rootScope.locale.code;*/
				this.formData.locale = $rootScope.locale.code;
				
		          	
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
					
					/*scope.formData.name = "ABC";
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
				        });*/
					
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
