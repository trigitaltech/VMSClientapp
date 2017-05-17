(function(module) {
  mifosX.controllers = _.extend(module, {
	  ViewVendorOtherController: function(scope, routeParams , resourceFactory ,location,$modal,PermissionService,API_VERSION,$rootScope,route,TENANT,http) {
		
        scope.vendorotherData = [];
        resourceFactory.vendorOtherDetailsResource.getTemplateDetails({vendorId: routeParams.id} , function(data) {
        	scope.vendorotherData = data;
        	
        });
        
        
        scope.downloadFile = function (id,panNo){
        	
            	
        	window.open($rootScope.hostUrl+ API_VERSION +'/vendor'+ '/documents/'+id+'/attachment?tenantIdentifier='+TENANT+'&name='+panNo);
        	
        	//window.open($rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents' +'/vendorfile'+panNo);
        	//console.log(scope.panNo);
    		    /*http({
    		    	method:'GET',
    		    	//url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+ 2 +'documents'+ 'vendorfile'+ 'panNo';
    		        url: $rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents'+'/vendorfile'+'/panNo',
    		    	data: {}
    		    	}).then(function(data) {
    		    		scope.vendorDoc = data.data;
    		    	});*/
    		    //window.open($rootScope.hostUrl+ API_VERSION +'/clients/'+ routeParams.id +'/documents/'+ documentId +'/attachment?tenantIdentifier='+TENANT);
             //window.open($rootScope.hostUrl+ API_VERSION +'/vendor/'+2+'/documents' +'/print?tenantIdentifier='+TENANT);
       };
        
      	function  approve($scope, $modalInstance) {
      		$scope.approve = function () {
              	resourceFactory.vendorManagementResource.remove({vendorId: scope.vendorId} , {} , function(data) {
              		location.path('/vendormanagement');
              	});
              	$modalInstance.dismiss('delete');
      		};
            $scope.cancel = function () {
                  $modalInstance.dismiss('cancel');
            };
        }
        
    }
  });
  mifosX.ng.application.controller('ViewVendorOtherController', ['$scope', '$routeParams','ResourceFactory', '$location','$modal','PermissionService','API_VERSION','$rootScope','$route','TENANT','$http',mifosX.controllers.ViewVendorOtherController]).run(function($log) {
    $log.info("ViewVendorOtherController initialized");
  });
}(mifosX.controllers || {}));
