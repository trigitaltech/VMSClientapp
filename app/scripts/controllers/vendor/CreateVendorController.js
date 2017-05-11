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
		        
		        /*function randomString(len)
		        {
		            var str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
		            var randomStr='';
		            for(var i=0;i<len;i++)
		            {
		                randomStr = randomNumber(0,str.length-1);
		            }
		         
		            return randomStr;
		        }*/
			
			scope.addbankdetails = function(){
				
			}

			/*scope.onFileSelect = function($files) {
		          scope.file = $files[0];
		          //scope.filearray = [];
		          
		          for (var i=0; i<$files.length; i++){
		        	  var reader = new FileReader();
		        	  reader.fileName = $files[i].names;
		        	  scope.file.push(reader.fileName);
		          }
		          console.log(scope.file);
		        };*/
		        
			/*scope.files = [];
			var uploadedFiles = [{fileContent:'a byte array', fileName:'doc1.txt'}]; //this comes from the Web Server
			scope.files.push(new File(uploadedFiles[0].fileContent , "filename.txt", {type: "text/plain", lastModified: date}));*/
			
			scope.file = [];
		    scope.onFileSelect = function($files) {
		    	//$arrlength = gfile[];
		    	scope.files = $files[0];//+$files[1];
		       //.scope.file = $files[0];
			       
			       scope.file.push(scope.files);
			       console.log(scope.file);
			    };
			    
			    scope.fileFormData = {};
			    scope.residentialProofAdd = function(){
			    	
			    	scope.fileFormData.name = "BBC"
			    	$upload.upload({
				          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents', 
				          data: scope.fileFormData,
				          file: scope.file
				        }).then(function(data) {
				          // to fix IE not refreshing the model
				          if (!scope.$$phase) {
				            scope.$apply();
				          }
				        });

	            };
	            
	            scope.chequeFormData = {};
			    scope.chequeNoProofAdd = function(){
			    	
			    	scope.chequeFormData.name = "BCC"
			    	$upload.upload({
				          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents', 
				          data: scope.chequeFormData,
				          file: scope.file
				        }).then(function(data) {
				          // to fix IE not refreshing the model
				          if (!scope.$$phase) {
				            scope.$apply();
				          }
				        });

	            };
			    /*scope.onFileSelectImg = function($files) {
				       scope.file2 = $files[0];
				       scope.file.push(scope.file2);
				       console.log(scope.file2);
				    };*/
				    
				    //scope.file = scope.file1 + scope.file2;
				    //console.log(scope.file);
				
			scope.submit = function() {	
				
				this.formData.locale = $rootScope.locale.code;
				//scope.formData.name = scope.randomUniqKeyFun("FILE-");
				
				resourceFactory.vendorManagementResource.save(this.formData, function(data) {
					
					/*scope.formData.name = "BBC";
					$upload.upload({
				          url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+data.resourceId+'/documents', 
				          data: scope.formData,
				          file: scope.file
				        }).then(function(data) {
				          // to fix IE not refreshing the model
				          if (!scope.$$phase) {
				            scope.$apply();
				          }
				        });*/
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
