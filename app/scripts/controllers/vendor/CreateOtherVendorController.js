(function(module) {
	mifosX.controllers = _.extend(module, {				
		CreateOtherVendorController : function(scope,resourceFactory, 
				location, dateFilter,validator, $rootScope, routeParams, $upload, API_VERSION) {
			
			scope.formData = {};
			scope.vendorId = routeParams.id;
			scope.formData.dateFormat = 'dd MMMM yyyy';
			scope.formData.vendorId = scope.vendorId;
				
			scope.formData.msmRegDate = dateFilter(new Date(), 'dd MMMM yyyy');
			
			scope.file = [];
		    scope.onFileSelect = function($files) {
		        scope.files = $files[0];
		        //scope.file.push(scope.files);
		        //console.log(scope.file);
		    };
			
			scope.fileArray = [];
			scope.permanentAccNo = function(panNo){
		    	
		    	scope.fileArray.push({name:panNo, fileObj:scope.files});
		    	console.log(scope.fileArray);

            };
            
            scope.certificateincorp = function(incurCertification){
		    	
		    	scope.fileArray.push({name:incurCertification, fileObj:scope.files});
		    	console.log(scope.fileArray);
            };
            
            scope.serviceTaxRegnno = function(stNo){
		    	
            	scope.fileArray.push({name:stNo, fileObj:scope.files});
		    	console.log(scope.fileArray);

            };
            
            scope.exciseNo = function(msmStatus){
		    	
            	scope.fileArray.push({name:msmStatus, fileObj:scope.files});
		    	console.log(scope.fileArray);
		    	
            };
            
            scope.microsmall = function(msmRegNo){
		    	
            	scope.fileArray.push({name:msmRegNo, fileObj:scope.files});
		    	console.log(scope.fileArray);
		    	
            };
            
            scope.vatRegnno = function(vatNo){
		    	
            	scope.fileArray.push({name:vatNo, fileObj:scope.files});
		    	console.log(scope.fileArray);
		    	
            };
            
            scope.gstRegnno = function(gstNo){
		    	
            	scope.fileArray.push({name:gstNo, fileObj:scope.files});
		    	console.log(scope.fileArray);
		    	
            };
            
            scope.cstRegnno = function(cstNo){
		    	
            	scope.fileArray.push({name:cstNo, fileObj:scope.files});
		    	console.log(scope.fileArray);

            };
			
		    /*scope.pnoOtherFormData = {};
		    scope.permanentAccNo = function(panNo){
		    	
		    	//scope.panNo = scope.formData.panNo;
		    	//console.log(scope.panNo);
		    	
		    	scope.fileArray.push({name:panNo, fileObj:scope.files});
		    	console.log(scope.fileArray);
		    	scope.pnoOtherFormData.name = scope.formData.panNo;
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
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
		    scope.certificateincorp = function(incurCertification){
		    	
		    	console.log(incurCertification);
		    	scope.fileArray.push({name:incurCertification, fileObj:scope.files});
		    	console.log(scope.fileArray);
		    	scope.certificateincorpFormData.name = scope.formData.incurCertification;
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
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
		    	
		    	scope.serviceTaxRegnnoFormData.name = scope.formData.stNo;
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
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
		    	
		    	scope.exciseNoFormData.name = scope.formData.msmStatus;
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
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
		    	
		    	scope.microsmallFormData.name = scope.formData.msmRegNo;
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
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
		    	
		    	scope.vatRegnnoFormData.name = scope.formData.vatNo;
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
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
		    	
		    	scope.gstRegnnoFormData.name = scope.formData.gstNo;
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
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
		    	
		    	scope.cstRegnnoFormData.name = scope.formData.cstNo;
		    	$upload.upload({
			          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
			          data: scope.cstRegnnoFormData,
			          file: scope.file
			        }).then(function(data) {
			          // to fix IE not refreshing the model
			          if (!scope.$$phase) {
			            scope.$apply();
			          }
			        });

            };*/
            
		    
			scope.submit = function() {	
				
				this.formData.locale = $rootScope.locale.code;
				//scope.formData.fileArray = scope.fileArray;
				
				//scope.fileArray =new Array();
				
				//scope.fileArray =new Array();
				resourceFactory.vendorOtherDetailsResource.save(this.formData, function(data) {
					//scope.filejsonObjData = [];
					scope.fileArrayData = new Array();
					
					if (scope.fileArray.length > 0) {
						
						for (var i in scope.fileArray) {
							scope.fileArrayData.push({
													name    : scope.fileArray[i].name,
													fileObj : scope.fileArray[i].fileObj
							});
						};
					}
					//scope.filejsonObjData.push(scope.fileArrayData);
					console.log(scope.fileArrayData);
					$upload.upload({
			              url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
			              data: scope.fileArrayData,
			              file: scope.file
			            }).then(function(data) {
			              // to fix IE not refreshing the model
			              if (!scope.$$phase) {
			                scope.$apply();
			              }
			            });

					$upload.upload({
				          url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
				          data: scope.cstRegnnoFormData,
				          file: scope.file
				        }).then(function(data) {
				          // to fix IE not refreshing the model
				          if (!scope.$$phase) {
				            scope.$apply();
				          }
				        });
					
					location.path('/vendormanagement');		
					
				});							
			};
 /*scope.submit = function() { 
                
                this.formData.locale = $rootScope.locale.code;
                //scope.formData.fileArray = scope.fileArray;
                
                //scope.fileArray =new Array();
                
                //scope.fileArray =new Array();
                resourceFactory.vendorOtherDetailsResource.save(this.formData, function(data) {
                 //scope.filejsonObjData = {};
                 scope.fileArrayData = new Array();
                 
                 if (scope.fileArray.length > 0) {
                  
                  for (var i in scope.fileArray) {
                   scope.fileArrayData.push({
                         name    : scope.fileArray[i].name,
                         fileObj : scope.fileArray[i].fileObj
                     });
                   
                     scope.filejsonObjData = {};
                     
                         if (scope.fileObj.length > 0) {
                          for (var j in scope.fileObj) {
                                 scope.filejsonObjData.push({
                                    lastModified      : scope.fileObj[j].lastModified,
                                    lastModifiedDate  : scope.fileObj[j].lastModifiedDate,
                                    name        : scope.fileObj[j].name,
                                    size     : scope.fileObj[j].size,
                                    type        : scope.fileObj[j].type
                                 });
                         }
                         
                   
                         };
                      }
                  }
                 //scope.filejsonObjData.push(scope.fileArrayData);
                 console.log(scope.fileArrayData);
                 $upload.upload({
                             url: $rootScope.hostUrl+ API_VERSION +'/vendor'+'/documents', 
                             data: scope.fileArrayData,
                             file: scope.file
                           }).then(function(data) {
                             // to fix IE not refreshing the model
                             if (!scope.$$phase) {
                               scope.$apply();
                             }
                           });
                 location.path('/vendormanagement');  
                });       
            };*/
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
